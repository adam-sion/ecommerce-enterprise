package adam.dev.ecom_enterprise.graphql.inputs;

import java.util.List;

public record OrderInput(List<OrderItemInput> orderItems, Double totalAmount, String nonce) {
}
