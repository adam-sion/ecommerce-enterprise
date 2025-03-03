package adam.dev.ecom_enterprise.graphql.resolvers;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.graphql.inputs.CategoryInput;
import adam.dev.ecom_enterprise.service.S3Service;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;
import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@DgsComponent
@RequiredArgsConstructor
public class CategoryResolver {

    private S3Service s3Service;

    @DgsMutation
    public Category createCategory(@InputArgument(name = "input") CategoryInput categoryInput, MultipartFile image) {
     return null;
    }


}
