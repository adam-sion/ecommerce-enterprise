package adam.dev.ecom_enterprise.provider;

import adam.dev.ecom_enterprise.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.io.IOException;
import java.util.Arrays;

@AllArgsConstructor
@Getter
public enum AuthProviderHandler {

    GOOGLE("google") {
        @Override
        public void handleLoginSuccess(Authentication authentication, UserService userService, String clientUrl, HttpServletResponse response) throws IOException {
            OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
            String email = oAuth2User.getAttribute("email");
            String name = oAuth2User.getAttribute("name");
            String oauthId = oAuth2User.getAttribute("sub");
            String provider = this.getProviderName();
            userService.createOrUpdateUser(email, name, provider, oauthId);
            response.sendRedirect(clientUrl);
        }
    },

    FACEBOOK("facebook") {
        @Override
        public void handleLoginSuccess(Authentication authentication, UserService userService, String clientUrl, HttpServletResponse response) throws IOException {
            OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
            String email = oAuth2User.getAttribute("email");
            String name = oAuth2User.getAttribute("name");
            String oauthId = oAuth2User.getAttribute("id");
            String provider = this.getProviderName();
            userService.createOrUpdateUser(email, name, provider, oauthId);
            response.sendRedirect(clientUrl);
        }
    };

    private final String providerName;

    public abstract void handleLoginSuccess(Authentication authentication, UserService userService, String clientUrl, HttpServletResponse response) throws IOException;

    public static AuthProviderHandler fromString(String providerName) {
        return Arrays.stream(AuthProviderHandler.values())
                .filter(provider -> provider.getProviderName().equalsIgnoreCase(providerName))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown provider: " + providerName));
    }

}


