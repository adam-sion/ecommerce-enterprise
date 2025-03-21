package adam.dev.ecom_enterprise.graphql.fetchers;

import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.service.ProductService;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import lombok.RequiredArgsConstructor;

import java.util.List;

@DgsComponent
@RequiredArgsConstructor
public class ProductFetcher {

    private final ProductService productService;

    @DgsQuery
    public List<Product> products() {
        return productService.getAllProducts();
    }

}
