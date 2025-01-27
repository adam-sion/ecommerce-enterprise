package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Role;
import adam.dev.ecom_enterprise.entity.User;
import adam.dev.ecom_enterprise.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public void createOrUpdateUser(String email, String name, String provider, String oauthId) {
        userRepository.findByOauthIdAndOauthProvider(oauthId, provider)
                .orElseGet(()-> {
                    User newUser = new User();
                    newUser.setId(UUID.randomUUID());
                    newUser.setEmail(email);
                    newUser.setName(name);
                    newUser.setRole(Role.USER);
                    newUser.setOauthProvider(provider);
                    newUser.setOauthId(oauthId);

                    return userRepository.save(newUser);
                });
    }

}
