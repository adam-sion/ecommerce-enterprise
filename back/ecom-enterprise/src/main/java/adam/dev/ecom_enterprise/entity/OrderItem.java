package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Entity
@Table(name = "order_items")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class OrderItem extends JTVEntity {

    @Column
    private Integer quantity;

    @Column(name = "price_at_purchase")
    private Double priceAtPurchase;

    @JsonBackReference(value = "order-orderItem")
    @JoinColumn(name = "order_id")
    @ManyToOne
    private Order order;

    @JsonManagedReference(value = "orderItem-product")
    @JoinColumn(name = "product_id")
    @ManyToOne
    private Product product;

    public OrderItem(Integer quantity, Double priceAtPurchase, Order order, Product product) {
        this.quantity = quantity;
        this.priceAtPurchase = priceAtPurchase;
        this.order = order;
        this.product = product;
    }

}
