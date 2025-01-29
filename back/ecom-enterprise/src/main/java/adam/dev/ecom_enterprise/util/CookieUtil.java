package adam.dev.ecom_enterprise.util;

import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CookieUtil {

    private final UserDetailsService userDetailsService;

    private final JwtUtil jwtUtil;

    public void setAuthCookie(final HttpServletResponse response, final String name) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(name);
        String jwt = jwtUtil.generateAuthToken(userDetails);

        ResponseCookie cookie = ResponseCookie.from("auth_token", jwt)
                .httpOnly(true)
                .path("/")
                .secure(true)
                .sameSite("Lax")
                .build();

        response.addHeader("Set-Cookie", cookie.toString());
    }

    public void setRefreshCookie(final HttpServletResponse response, final String name) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(name);
        String jwt = jwtUtil.generateRefreshToken(userDetails);

        ResponseCookie cookie = ResponseCookie.from("refresh_token", jwt)
                .httpOnly(true)
                .path("/")
                .secure(true)
                .sameSite("Lax")
                .build();

        response.addHeader("Set-Cookie", cookie.toString());
    }

}
