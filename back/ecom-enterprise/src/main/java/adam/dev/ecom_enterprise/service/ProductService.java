package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final S3Service s3Service;

    @Transactional
    public Product saveOrOverrideProduct(Product product, boolean toDeleteImage, boolean toDeleteThumbnails) {
        if (product.getId() == null) {
            return productRepository.save(product);
        }

        return productRepository.findById(product.getId())
                .map(currentProduct -> {
                    List<String> toDelete = new ArrayList<>();

                    if (toDeleteImage) {
                        toDelete.add(currentProduct.getImage());
                    }

                    if (toDeleteThumbnails) {
                        toDelete.addAll(currentProduct.getThumbnails());
                    }

                    s3Service.deleteFiles(toDelete);
                    product.setId(currentProduct.getId());
                    product.setCreatedAt(currentProduct.getCreatedAt());

                    return productRepository.save(product);
                })
                .orElseGet(() -> productRepository.save(product));
    }

    public List<Product> getAllProducts() {
        List<Product> products =  productRepository.findAll();

        return products;
    }

    public Product getProductBySlug(String slug) {
        return productRepository.findBySlug(slug).orElseThrow(()-> new EntityNotFoundException(String.format("Product with slug: %s not found", slug)));
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElseThrow(()-> new EntityNotFoundException(String.format("Product with id: %s not found", id)));
    }

    @Transactional
    public Product deleteProductById(String id) {
        Product product = productRepository.findById(id).orElseThrow(()-> new EntityNotFoundException(String.format("Product with id: %s not found", id)));
        productRepository.delete(product);

        return product;
    }

}
