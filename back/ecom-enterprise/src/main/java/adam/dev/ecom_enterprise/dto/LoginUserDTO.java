package adam.dev.ecom_enterprise.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class LoginUserDTO {

    @NotNull(message = "can't be null")
    private String username;

    @NotNull(message = "can't be null")
    private String password;

}

