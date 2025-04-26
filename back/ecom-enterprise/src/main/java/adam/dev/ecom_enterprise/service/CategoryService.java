package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
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
