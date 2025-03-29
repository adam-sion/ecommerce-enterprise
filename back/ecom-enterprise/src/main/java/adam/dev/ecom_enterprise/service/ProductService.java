package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        List<Product> products =  productRepository.findAll();

        return products;
    }

    public Product getProductBySlug(String slug) {
        return productRepository.findBySlug(slug).orElseThrow(()-> new EntityNotFoundException(String.format("Product with slug: %s not found", slug)));
    }

}
