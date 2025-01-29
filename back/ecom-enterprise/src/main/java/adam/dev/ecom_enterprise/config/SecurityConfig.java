package adam.dev.ecom_enterprise.config;

import adam.dev.ecom_enterprise.filter.JwtAuthenticationFilter;
import adam.dev.ecom_enterprise.service.CustomUserDetailsService;
import adam.dev.ecom_enterprise.service.UserService;
import adam.dev.ecom_enterprise.util.CookieUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig implements WebMvcConfigurer {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    private final CustomUserDetailsService customUserDetailsService;

    private final UserService userService;

    private final PasswordEncoder passwordEncoder;

    private final CookieUtil cookieUtil;

    @Value("${JTV_CLIENT_URL}")
    private String allowedOrigin;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(allowedOrigin)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/oauth2/authorization/{provider}", "/auth/**", "/graphql").permitAll()
                        .requestMatchers("/auth/success").authenticated()
                        .anyRequest().denyAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/oauth2/authorization/google")
                        .successHandler((request, response, authentication)-> {
                            OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
                            String email = oAuth2User.getAttribute("email");
                            String name = oAuth2User.getAttribute("name");
                            String oauthId = oAuth2User.getAttribute("sub");
                            userService.createOrUpdateUser(email, name, "google", oauthId);
                           cookieUtil.setAuthCookie(response, email);
                            cookieUtil.setRefreshCookie(response, email);
                            response.sendRedirect(allowedOrigin);
                        })
//                        .loginPage("/oauth2/authorization/facebook")
//                        .successHandler((request, response, authentication)-> {
//                            OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
//                            String email = oAuth2User.getAttribute("email");
//                            String name = oAuth2User.getAttribute("name");
//                            String oauthId = oAuth2User.getAttribute("id");
//                            userService.createOrUpdateUser(email, name, "facebook", oauthId);
//                            cookieUtil.setAuthCookie(response, email);
//                            cookieUtil.setRefreshCookie(response, email);
//                            response.sendRedirect(allowedOrigin);
//                        })
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(customUserDetailsService)
                .passwordEncoder(passwordEncoder);

        return authenticationManagerBuilder.build();
    }

}