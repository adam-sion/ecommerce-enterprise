package adam.dev.ecom_enterprise.config;


import com.braintreegateway.BraintreeGateway;
import com.braintreegateway.Environment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("disabled")
@Configuration
public class BraintreeConfig {

    @Value("${braintree.merchantId}")
    private String merchantId;

    @Value("${braintree.publicKey}")
    private String publicKey;

    @Value("${braintree.privateKey}")
    private String privateKey;

    @Value("${braintree.environment}")
    private String environment;

    @Bean
    public BraintreeGateway braintreeGateway() {
        return new BraintreeGateway(
                Environment.parseEnvironment(environment),
                merchantId,
                publicKey,
                privateKey
        );
    }

}