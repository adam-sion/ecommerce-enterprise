package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.dto.RegisterUserDTO;
import adam.dev.ecom_enterprise.entity.Role;
import adam.dev.ecom_enterprise.entity.User;
import adam.dev.ecom_enterprise.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void createOrUpdateUser(String email, String name, String provider, String oauthId, String picture) {
        userRepository.findByEmail(email)
                .map(existingUser -> {
                    existingUser.setName(name);
                    existingUser.setOauthProvider(provider);
                    existingUser.setOauthId(oauthId);

                   return userRepository.save(existingUser);
                })
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setEmail(email);
                    newUser.setName(name);
                    newUser.setRole(Role.USER);
                    newUser.setOauthProvider(provider);
                    newUser.setOauthId(oauthId);
                    newUser.setPicture(picture);

                    return userRepository.save(newUser);
                });
    }

    public Optional<User> findUserByUsernameOrEmail(String userIdentifier) {
        return userRepository.findByEmailOrName(userIdentifier, userIdentifier);
    }

    public void createUser(RegisterUserDTO user) {
        String email = user.getEmail();
        User newUser = new User();
        newUser.setName(user.getUsername());
        newUser.setEmail(email);
        newUser.setRole(Role.USER);
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(newUser);
    }

}
