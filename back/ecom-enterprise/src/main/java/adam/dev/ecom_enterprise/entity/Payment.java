package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "payments")
@NoArgsConstructor
@Getter
@Setter
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "payment_intent_id")
    private Long paymentIntentId;

    @Column(name = "total_amount")
    private Double totalAmount;

    @Column
    private String currency;

    @OneToOne(mappedBy = "payment")
    @JsonBackReference(value = "order-payment")
    private Order order;

}
