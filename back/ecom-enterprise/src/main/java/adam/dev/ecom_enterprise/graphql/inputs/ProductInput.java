package adam.dev.ecom_enterprise.graphql.inputs;

import java.util.List;

public record ProductInput(String title, Double price, List<String> materials, String description, Integer stockQuantity, Long categoryId) {
}
