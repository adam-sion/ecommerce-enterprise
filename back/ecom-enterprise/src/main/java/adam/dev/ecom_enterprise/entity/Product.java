package adam.dev.ecom_enterprise.entity;

import adam.dev.ecom_enterprise.types.ListStringType;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "products")
@NoArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private Double price;

    @Column
    private String image;

    @Type(value = ListStringType.class)
    @Column(columnDefinition = "TEXT[]")
    private List<String> thumbnails;

    @Type(value = ListStringType.class)
    @Column(columnDefinition = "TEXT[]")
    private List<String> materials;

    @Column
    private String description;

    @Column(name = "stock_quantity")
    private Integer stockQuantity;

    @Column(name = "created_at")
    private Instant createdAt;

    @ManyToOne
    @JsonManagedReference(value = "product-category")
    @JoinColumn(name = "category_id")
    private Category category;

}

