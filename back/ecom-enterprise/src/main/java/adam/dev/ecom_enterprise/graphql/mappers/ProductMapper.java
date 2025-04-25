package adam.dev.ecom_enterprise.graphql.mappers;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.graphql.inputs.ProductInput;
import adam.dev.ecom_enterprise.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ProductMapper {

    private final CategoryService categoryService;

    public Product toProduct(ProductInput productInput, List<String> thumbnails, String image) {
        Category category = categoryService.findCategoryById(productInput.categoryId());
        Product product = new Product(productInput.id(), productInput.title(), productInput.price(), image,
                thumbnails, productInput.materials(), productInput.sizes(), productInput.description(), productInput.stockQuantity(), category);

        return product;
    }

}
