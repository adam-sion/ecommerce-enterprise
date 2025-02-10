package adam.dev.ecom_enterprise.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RegisterUserDTO {

    @NotNull(message = "can't be null")
    private String username;

    @NotNull(message = "can't be null")
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotNull(message = "can't be null")
    private String password;
}
