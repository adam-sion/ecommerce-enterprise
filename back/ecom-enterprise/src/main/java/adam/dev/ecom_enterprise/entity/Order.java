package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Order {

    @Id
    private String id;

    @Enumerated(EnumType.STRING)
    @Column(name = "delivery_status")
    private DeliveryStatus deliveryStatus;

    @Column(name = "created_at")
    private Instant createdAt;

    @JsonManagedReference(value = "order-orderItem")
   @OneToMany(mappedBy = "order")
   private List<OrderItem> orderItems;

    @OneToOne
    @JsonManagedReference(value = "order-customer")
    @JoinColumn(name = "customer_id")
    private CustomerDetails customerDetails;

    @OneToOne
    @JsonManagedReference(value = "order-payment")
    @JoinColumn(name = "payment_id")
    private Payment payment;

    @ManyToOne
    @JsonBackReference(value = "user-orders")
    @JoinColumn(name = "user_id")
    private User user;

    @PrePersist
    private void prePersist() {
        this.id = UUID.randomUUID().toString();
    }

}
