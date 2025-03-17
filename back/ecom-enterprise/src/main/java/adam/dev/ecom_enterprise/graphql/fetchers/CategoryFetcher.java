package adam.dev.ecom_enterprise.graphql.fetchers;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.service.CategoryService;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import lombok.RequiredArgsConstructor;

import java.util.List;

@DgsComponent
@RequiredArgsConstructor
public class CategoryFetcher {

    private final CategoryService categoryService;

    @DgsQuery
    public List<Category> categories() {
        return categoryService.findAllCategories();
    }

}
