package adam.dev.ecom_enterprise.graphql.resolvers;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.graphql.inputs.CategoryInput;
import adam.dev.ecom_enterprise.graphql.mappers.CategoryMapper;
import adam.dev.ecom_enterprise.service.CategoryService;
import adam.dev.ecom_enterprise.service.S3Service;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;
import graphql.schema.DataFetchingEnvironment;
import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@DgsComponent
@RequiredArgsConstructor
public class CategoryResolver {

    private final S3Service s3Service;

    private final CategoryService categoryService;

    private final CategoryMapper categoryMapper;


    @DgsMutation
    public Category addCategory(@InputArgument CategoryInput input, DataFetchingEnvironment dfe) {
        MultipartFile file = dfe.getArgument("image");
        String image = input.image();
        boolean toDeleteImage = false;

        if (file != null) {
            toDeleteImage = true;
            image = s3Service.uploadFile(file);
        }

        Category category = categoryMapper.toCategory(input, image);
        Category savedCategory = categoryService.saveOrOverrideCategory(category, toDeleteImage);

        return savedCategory;
    }

    @DgsMutation
    public Category deleteCategory(@InputArgument(name = "id") String id) {
        Category category = categoryService.deleteCategoryById(id);
        String fileToDelete = category.getImage();
        s3Service.deleteFile(fileToDelete);

        return category;
    }


}
