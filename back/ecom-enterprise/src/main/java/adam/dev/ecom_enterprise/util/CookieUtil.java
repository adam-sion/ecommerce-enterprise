package adam.dev.ecom_enterprise.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class CookieUtil {

    private final UserDetailsService userDetailsService;

    private final JwtUtil jwtUtil;

    private final Map<String, Integer> cookies = Map.of("auth_token", 1000 * 60 * 60 * 7, "refresh_token", 1000 * 60 * 60 * 24 * 7);

    public void addCookies(final HttpServletResponse httpServletResponse, String name) {
        operateCookies(httpServletResponse, this::setAuthCookie, name);
    }

    public void removeCookies(final HttpServletResponse httpServletResponse) {
        operateCookies(httpServletResponse, this::clearAuthCookie, null);
    }

    private void operateCookies(final HttpServletResponse response, OperateOnResponseByCookie operation, String name) {
        cookies.forEach((cookie, expires) -> operation.operateOnResponseByCookie(response, name, cookie, expires));
    }

    private void setAuthCookie(final HttpServletResponse response, final String name, final String cookieName, final Integer expiresIn) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(name);
        String jwt = jwtUtil.generateAuthToken(userDetails, expiresIn);

        ResponseCookie cookie = ResponseCookie.from(cookieName, jwt)
                .httpOnly(true)
                .path("/")
                .secure(true)
                .sameSite("Lax")
                .build();

        response.addHeader("Set-Cookie", cookie.toString());
    }

    private void clearAuthCookie(HttpServletResponse response, final String name, final String cookieName, final Integer expiresIn) {
        Cookie cookie = new Cookie(cookieName, null);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(expiresIn);
        response.addCookie(cookie);
    }

}
