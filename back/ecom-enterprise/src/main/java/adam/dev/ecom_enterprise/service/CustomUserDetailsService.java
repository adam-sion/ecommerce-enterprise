package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserService userService;

    public CustomUserDetailsService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String name) {
        final String GRANTED_AUTH_PREFIX = "ROLE_";
        User user = userService.findUserByUsernameOrEmail(name)
                .orElseThrow(()-> new UsernameNotFoundException("user not found"));

        return new org.springframework.security.core.userdetails.User(
                user.getName(),
                user.getPassword() == null ? "" : user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(GRANTED_AUTH_PREFIX + user.getRole()))
        );
    }

}