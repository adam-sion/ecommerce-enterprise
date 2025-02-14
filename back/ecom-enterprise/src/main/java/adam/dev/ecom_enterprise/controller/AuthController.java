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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    private final RegisterVerificationService registerVerificationService;

    private final JwtUtil jwtUtil;

    private final CookieUtil cookieUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginUserDTO user, HttpServletResponse response) {
        String username = user.getUsername();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, user.getPassword()));
        cookieUtil.addCookies(response, username);

        return ResponseEntity.ok()
                .body("Login success");
    }

    @PostMapping("/signup")
    public ResponseEntity<VerificationInfoDTO> registerUser(@RequestBody @Valid RegisterUserDTO user) {
        VerificationInfoDTO verificationInfo = registerVerificationService.sendVerificationEmail(user);

        return new ResponseEntity<>(verificationInfo, HttpStatus.OK);
    }

    @GetMapping("/verify")
    public ResponseEntity<?> verifyEmail(@RequestParam String token, HttpServletResponse response) {
        String username = registerVerificationService.verifyAndSaveUser(token).getUsername();
        cookieUtil.addCookies(response, username);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@CookieValue(name = "refresh_token") String refreshToken, HttpServletResponse response) {
        String username = jwtUtil.extractUserName(refreshToken);
        cookieUtil.addCookies(response, username);
        return ResponseEntity.ok()
                .body("Refresh token success");
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        cookieUtil.removeCookies(response);

        return ResponseEntity.ok().body("Logout success");
    }

}
