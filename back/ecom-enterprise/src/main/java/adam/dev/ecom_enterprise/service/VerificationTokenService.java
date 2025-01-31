package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.dto.VerificationInfoDTO;
import lombok.AllArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import java.time.Duration;

@Service
@AllArgsConstructor
public class VerificationTokenService {

    private final StringRedisTemplate redisTemplate;

    public VerificationInfoDTO storeToken(String data, String token) {
         final int TOKEN_EXPIRATION_MINUTES = 5;

            redisTemplate.opsForValue().set(token, data, Duration.ofMinutes(TOKEN_EXPIRATION_MINUTES));

            return new VerificationInfoDTO(TOKEN_EXPIRATION_MINUTES);

    }

    public String getDataByToken(String token) {
        String data = redisTemplate.opsForValue().get(token);

        if (data == null) {
            throw new IllegalArgumentException("Invalid or expired token");
        }

        return data;
    }

    public void deleteToken(String token) {
        redisTemplate.delete(token);
    }

}

