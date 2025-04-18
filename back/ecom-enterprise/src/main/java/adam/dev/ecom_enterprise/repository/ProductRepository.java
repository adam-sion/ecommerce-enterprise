package adam.dev.ecom_enterprise.repository;

import adam.dev.ecom_enterprise.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

    Optional<Product> findBySlug(String slug);

    Optional<Product> findByTitle(String title);

}
