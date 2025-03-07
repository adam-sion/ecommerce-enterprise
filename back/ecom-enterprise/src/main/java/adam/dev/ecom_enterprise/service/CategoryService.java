package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Category;
import adam.dev.ecom_enterprise.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category findCategoryById(Long id) {
        return categoryRepository.findById(id).orElseThrow(()-> new RuntimeException(String.format("Category with id '%s' not found", id)));
    }

}
