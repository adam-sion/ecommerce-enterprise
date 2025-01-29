package adam.dev.ecom_enterprise.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ErrorResponse {

    private String error;

    private String message;

}
