package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

}
