package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Order extends JTVEntity {

    @Enumerated(EnumType.STRING)
    @Column(name = "delivery_status")
    private OrderStatus orderStatus;

    @CreationTimestamp
    @Column(name = "created_at")
    private Instant createdAt;

    @JsonManagedReference(value = "order-orderItem")
   @OneToMany(mappedBy = "order")
   private List<OrderItem> orderItems;

    @OneToOne
    @JsonManagedReference(value = "order-customer")
    @JoinColumn(name = "customer_id")
    private CustomerDetails customerDetails;

    @Column(name = "total_amount")
    private Double totalAmount;

   @Column(name = "transaction_id")
   private String transactionId;

    @ManyToOne
    @JsonBackReference(value = "user-orders")
    @JoinColumn(name = "user_id")
    private User user;

    public Order(Double totalAmount, OrderStatus orderStatus) {
        this.totalAmount = totalAmount;
        this.orderStatus = orderStatus;
    }

}
