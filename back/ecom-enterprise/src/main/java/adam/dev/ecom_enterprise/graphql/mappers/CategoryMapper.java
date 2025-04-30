package adam.dev.ecom_enterprise.graphql.mappers;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.graphql.inputs.CategoryInput;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    public Category toCategory(CategoryInput categoryInput, String image) {
        Category category = new Category();
        category.setName(categoryInput.name());
        category.setImage(image);
        category.setId(categoryInput.id());

        return category;
    }

}
