package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Entity
@Table(name = "customer_details")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class CustomerDetails extends JTVEntity {

    @Column
    private String address;

    @Column
    private String city;

    @Column
    private String state;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "customer_email")
    private String customerEmail;

    @Column(name = "customer_phone")
    private String customerPhone;

    @OneToOne(mappedBy = "customerDetails")
    @JsonBackReference(value = "order-customer")
    private Order order;

}
