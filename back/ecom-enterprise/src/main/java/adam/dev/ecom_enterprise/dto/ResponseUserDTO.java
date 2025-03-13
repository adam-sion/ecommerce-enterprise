package adam.dev.ecom_enterprise.dto;

import adam.dev.ecom_enterprise.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseUserDTO {

    private String username;

    private String email;

    private String picture;

    private Role role;

}
