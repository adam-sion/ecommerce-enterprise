package adam.dev.ecom_enterprise.entity;

import adam.dev.ecom_enterprise.converter.StringListConverter;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "products")
@NoArgsConstructor
@ToString
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

    @Convert(converter = StringListConverter.class)
    @Column
    private List<String> thumbnails;

    @Convert(converter = StringListConverter.class)
    @Column
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

    @OneToMany(mappedBy = "product")
    @JsonBackReference(value = "orderItem-product")
    private List<OrderItem> orderItems;

    public Product(String title, Double price, String image, List<String> thumbnails, List<String> materials, String description, Integer stockQuantity, Category category) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.thumbnails = thumbnails;
        this.materials = materials;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.createdAt = Instant.now();
        this.category = category;
    }

}

