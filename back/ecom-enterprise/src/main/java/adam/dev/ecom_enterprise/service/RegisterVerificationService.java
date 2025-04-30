package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.dto.RegisterUserDTO;
import adam.dev.ecom_enterprise.dto.VerificationInfoDTO;
import adam.dev.ecom_enterprise.exception.rest.TokenProcessingException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RegisterVerificationService {

    @Value("${JTV_CLIENT_URL}")
    private String clientUrl;

    private final EmailService emailService;

    private final VerificationTokenService tokenService;

    private final UserService userService;

    private final ObjectMapper objectMapper;

    public VerificationInfoDTO sendVerificationEmail(RegisterUserDTO registerUserDTO) {
        String email = registerUserDTO.getEmail();
        userService.findUserByUsernameOrEmail(email).ifPresent(existingUser -> {
            throw new EntityExistsException(String.format("Email '%s' is already registered.", email));
        });

        String token = UUID.randomUUID().toString();

        try {
            String userJson = objectMapper.writeValueAsString(registerUserDTO);
            VerificationInfoDTO verificationInfo = tokenService.storeToken(userJson, token);
            String verificationUrl = clientUrl + "/?register-token=" + token;
            String message = "<p>Click the link below to verify your email:</p>"
                    + "<a href='" + verificationUrl + "'>Verify Email</a>";
            emailService.sendEmail(registerUserDTO.getEmail(), "Verify Your Email", message);

            return verificationInfo;
        } catch (JsonProcessingException e) {
            throw new TokenProcessingException(e.getMessage());
        }
    }

    public RegisterUserDTO verifyAndSaveUser(String token) {
        String data = tokenService.getDataByToken(token);
        try {
            RegisterUserDTO user = objectMapper.readValue(data, RegisterUserDTO.class);
            userService.createUser(user);
            tokenService.deleteToken(token);

            return user;
        } catch (JsonProcessingException e) {
            throw new TokenProcessingException(e.getMessage());
        }
    }

}

