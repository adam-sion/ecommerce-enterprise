package adam.dev.ecom_enterprise.exception.gql;

import graphql.ErrorType;
import io.jsonwebtoken.JwtException;
import org.springframework.security.authorization.AuthorizationDeniedException;

import java.util.Arrays;

public enum GQLErrorType {

    JWT(ErrorType.ValidationError, JwtException.class),

    AUTH_DENIED(ErrorType.ValidationError, AuthorizationDeniedException.class),

    ILLEGAL_ARGUMENT(ErrorType.ValidationError, IllegalArgumentException.class);

    public final ErrorType errorType;

    public final Class<?> exceptionClass;

    GQLErrorType(ErrorType errorType, Class<?> ex) {
        this.errorType = errorType;
        this.exceptionClass = ex;
    }

    public static GQLErrorType fromException(Class<?> exceptionClass) {
        return Arrays.stream(values())
                .filter(error-> error.exceptionClass.equals(exceptionClass))
                .findAny()
                .orElseGet(()-> GQLErrorType.ILLEGAL_ARGUMENT);
    }

}
