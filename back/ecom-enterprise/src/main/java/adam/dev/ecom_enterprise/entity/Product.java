package adam.dev.ecom_enterprise.entity;

import adam.dev.ecom_enterprise.converter.StringListConverter;
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
@Table(name = "products")
@NoArgsConstructor
@ToString(exclude = {"category"})
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String slug;

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

    @Convert(converter = StringListConverter.class)
    private List<String> sizes;

    @Column
    private String description;

    @Column(name = "stock_quantity")
    private Integer stockQuantity;

    @CreationTimestamp
    @Column(name = "created_at")
    private Instant createdAt;

    @ManyToOne
    @JsonManagedReference(value = "product-category")
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "product")
    @JsonBackReference(value = "orderItem-product")
    private List<OrderItem> orderItems;

    @PrePersist
    public void generateSlug() {
        final String DELIMITER = "-";
        final String SPLIT_BY_REGEX = "\\s+";

        setSlug(String.join(DELIMITER, title.split(SPLIT_BY_REGEX)));
    }

    public Product(String title, Double price, String image, List<String> thumbnails, List<String> materials, List<String> sizes, String description, Integer stockQuantity, Category category) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.thumbnails = thumbnails;
        this.materials = materials;
        this.sizes = sizes;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.category = category;
    }

}

