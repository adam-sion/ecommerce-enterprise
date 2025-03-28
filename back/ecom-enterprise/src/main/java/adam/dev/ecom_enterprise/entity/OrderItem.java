package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "order_items")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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


}
