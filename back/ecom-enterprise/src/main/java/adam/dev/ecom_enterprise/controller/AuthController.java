package adam.dev.ecom_enterprise.controller;

import adam.dev.ecom_enterprise.util.CookieUtil;
import adam.dev.ecom_enterprise.dto.LoginUserDTO;
import adam.dev.ecom_enterprise.dto.RegisterUserDTO;
import adam.dev.ecom_enterprise.util.JwtUtil;
import adam.dev.ecom_enterprise.service.UserService;
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

    private final UserService userService;

    private final AuthenticationManager authenticationManager;

    private final JwtUtil jwtUtil;

    private final CookieUtil cookieUtil;

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
    public ResponseEntity<?> registerUser(@RequestBody @Valid RegisterUserDTO user) {
        userService.createUser(user);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@CookieValue(name = "refresh_token") String refreshToken, HttpServletResponse response) {
        String username = jwtUtil.extractUserName(refreshToken);
     cookieUtil.setAuthCookie(response, username);
        return ResponseEntity.ok()
                .body("Refresh token success");
    }

}
