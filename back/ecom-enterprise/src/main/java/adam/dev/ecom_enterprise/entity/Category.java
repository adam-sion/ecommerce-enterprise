package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Table(name = "categories")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Category {

    @Id
    private String id;

    @Column
    private String name;

    @Column
    private String image;

    @OneToMany(mappedBy = "category")
    @JsonBackReference(value = "product-category")
    private List<Product> products;

}
