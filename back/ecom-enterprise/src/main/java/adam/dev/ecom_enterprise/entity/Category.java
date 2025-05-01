package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "categories")
@NoArgsConstructor
@ToString(exclude = "products")
@Getter
@Setter
public class Category extends JTVEntity {

    @Column
    private String name;

    @Column
    private String image;

    @OneToMany(mappedBy = "category", cascade = CascadeType.REMOVE)
    @JsonBackReference(value = "product-category")
    private List<Product> products;

}
