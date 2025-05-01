package adam.dev.ecom_enterprise.repository;

import adam.dev.ecom_enterprise.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, String> {
}

