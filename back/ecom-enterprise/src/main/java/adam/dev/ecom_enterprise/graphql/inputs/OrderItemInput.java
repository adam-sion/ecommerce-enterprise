package adam.dev.ecom_enterprise.graphql.inputs;

public record OrderItemInput(String productId, Integer quantity, Double priceAtPurchase) {
}
