package adam.dev.ecom_enterprise.graphql.inputs;

import java.util.List;

public record ProductInput(String id, String title, Double price, List<String> materials, List<String> sizes,
                           String description, Integer stockQuantity, String categoryId, String image,
                           List<String> thumbnails) {
}
