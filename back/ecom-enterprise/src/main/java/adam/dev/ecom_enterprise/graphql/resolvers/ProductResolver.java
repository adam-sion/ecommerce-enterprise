package adam.dev.ecom_enterprise.graphql.resolvers;

import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.graphql.inputs.ProductInput;
import adam.dev.ecom_enterprise.graphql.mappers.ProductMapper;
import adam.dev.ecom_enterprise.service.ProductService;
import adam.dev.ecom_enterprise.service.S3Service;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;
import graphql.schema.DataFetchingEnvironment;
import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@DgsComponent
@RequiredArgsConstructor
public class ProductResolver {

    private final ProductService productService;

    private final ProductMapper productMapper;

    private final S3Service s3Service;

    @DgsMutation
    public Product addProduct(@InputArgument(name = "input") ProductInput input, DataFetchingEnvironment dfe) {
        MultipartFile file = dfe.getArgument("image");
        List<MultipartFile> thumbnailsFiles = dfe.getArgument("thumbnails");
        List<String> thumbnails = s3Service.uploadFiles(thumbnailsFiles);
        String image = s3Service.uploadFile(file);
        Product product = productMapper.toProduct(input, thumbnails, image);
        Product savedProduct = productService.createProduct(product);

        return savedProduct;
    }

}
