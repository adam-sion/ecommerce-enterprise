package adam.dev.ecom_enterprise.graphql.fetchers;

import adam.dev.ecom_enterprise.dto.ResponseUserDTO;
import adam.dev.ecom_enterprise.entity.User;
import adam.dev.ecom_enterprise.graphql.mappers.UserMapper;
import adam.dev.ecom_enterprise.service.UserService;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

@DgsComponent
@RequiredArgsConstructor
public class UserFetcher {

    private final UserService userService;

    private final UserMapper userMapper;

    @PreAuthorize("isAuthenticated()")
    @DgsQuery
    public ResponseUserDTO me() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUserByUsernameOrEmail(userDetails.getUsername())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        return userMapper.toResponseUserDTO(user);
    }

}