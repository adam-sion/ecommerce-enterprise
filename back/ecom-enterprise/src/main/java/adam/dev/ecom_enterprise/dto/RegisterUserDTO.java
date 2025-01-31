package adam.dev.ecom_enterprise.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RegisterUserDTO {

    @NotNull(message = "can't be null")
    private String username;

    @NotNull(message = "can't be null")
    private String email;

    @NotNull(message = "can't be null")
    private String password;
}
