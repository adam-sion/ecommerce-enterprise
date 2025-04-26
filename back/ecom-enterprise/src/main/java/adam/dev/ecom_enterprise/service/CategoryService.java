package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.repository.CategoryRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    private final S3Service s3Service;

    @Transactional
    public Category saveOrOverrideCategory(Category category, boolean toDeleteImage) {
        if (category.getId() == null) {
            return categoryRepository.save(category);
        }

        return categoryRepository.findById(category.getId())
                .map(currentCategory -> {

                    if (toDeleteImage) {
                        s3Service.deleteFile(currentCategory.getImage());
                    }

                    category.setId(currentCategory.getId());
                    return categoryRepository.save(category);
                })
                .orElseGet(() -> categoryRepository.save(category));
    }

    public Category findCategoryById(String id) {
        return categoryRepository.findById(id).orElseThrow(()-> new RuntimeException(String.format("Category with id '%s' not found", id)));
    }

    public Category deleteCategoryById(String id) {
        Category category = findCategoryById(id);
        categoryRepository.delete(category);

        return category;
    }

    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

}
