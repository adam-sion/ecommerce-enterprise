package adam.dev.ecom_enterprise.util;

import jakarta.servlet.http.HttpServletResponse;

@FunctionalInterface
public interface OperateOnResponseByCookie {

    void operateOnResponseByCookie(final HttpServletResponse response, final String name,  final String cookieName, final Integer expiresIn);

}
