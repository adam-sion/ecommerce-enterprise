package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "delivery_status")
    private DeliveryStatus deliveryStatus;

    @Column(name = "created_at")
    private Instant createdAt;

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

}
