package adam.dev.ecom_enterprise.exception.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ErrorResponse {

    private String error;

    private String message;

}
