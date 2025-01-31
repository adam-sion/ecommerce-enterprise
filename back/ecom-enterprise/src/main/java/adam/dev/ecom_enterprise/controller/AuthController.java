package adam.dev.ecom_enterprise.controller;

import adam.dev.ecom_enterprise.dto.VerificationInfoDTO;
import adam.dev.ecom_enterprise.service.RegisterVerificationService;
import adam.dev.ecom_enterprise.util.CookieUtil;
import adam.dev.ecom_enterprise.dto.LoginUserDTO;
import adam.dev.ecom_enterprise.dto.RegisterUserDTO;
import adam.dev.ecom_enterprise.util.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    private final RegisterVerificationService registerVerificationService;

    private final JwtUtil jwtUtil;

    private final CookieUtil cookieUtil;

    @Value("${JTV_CLIENT_URL}")
    private String clientUrl;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginUserDTO user, HttpServletResponse response) {
        String username = user.getUsername();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, user.getPassword()));
        cookieUtil.setAuthCookie(response, username);
        cookieUtil.setRefreshCookie(response, username);

        return ResponseEntity.ok()
                .body("Login success");
    }

    @PostMapping("/signup")
    public ResponseEntity<VerificationInfoDTO> registerUser(@RequestBody @Valid RegisterUserDTO user) {
        VerificationInfoDTO verificationInfo = registerVerificationService.sendVerificationEmail(user);

        return new ResponseEntity<>(verificationInfo, HttpStatus.OK);
    }

    @GetMapping("/verify")
    public RedirectView verifyEmail(@RequestParam String token) {
        try {
            registerVerificationService.verifyAndSaveUser(token);

            return new RedirectView(clientUrl);
        } catch (Exception e) {
            return new RedirectView(clientUrl + "/error");
        }
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@CookieValue(name = "refresh_token") String refreshToken, HttpServletResponse response) {
        String username = jwtUtil.extractUserName(refreshToken);
     cookieUtil.setAuthCookie(response, username);
        return ResponseEntity.ok()
                .body("Refresh token success");
    }

}
