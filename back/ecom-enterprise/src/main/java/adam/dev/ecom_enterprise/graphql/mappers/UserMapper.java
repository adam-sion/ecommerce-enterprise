package adam.dev.ecom_enterprise.graphql.mappers;

import adam.dev.ecom_enterprise.dto.ResponseUserDTO;
import adam.dev.ecom_enterprise.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public ResponseUserDTO toResponseUserDTO(User user) {
        return new ResponseUserDTO(user.getName(), user.getEmail(), user.getPicture(), user.getRole());
    }

}
