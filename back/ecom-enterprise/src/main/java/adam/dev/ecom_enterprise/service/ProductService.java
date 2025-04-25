package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    @Transactional
    public Product saveOrOverrideProduct(Product product) {
        if (product.getId() == null) {
            return productRepository.save(product);
        }

        return productRepository.findById(product.getId())
                .map(currentProduct -> {
                    product.setId(currentProduct.getId());
                    return productRepository.save(product);
                })
                .orElseGet(() -> {
                    return productRepository.save(product);
                });
    }

    public List<Product> getAllProducts() {
        List<Product> products =  productRepository.findAll();

        return products;
    }

    public Product getProductBySlug(String slug) {
        return productRepository.findBySlug(slug).orElseThrow(()-> new EntityNotFoundException(String.format("Product with slug: %s not found", slug)));
    }

    @Transactional
    public Product deleteProductById(String id) {
        Product product = productRepository.findById(id).orElseThrow(()-> new EntityNotFoundException(String.format("Product with id: %s not found", id)));
        productRepository.delete(product);

        return product;
    }

}
