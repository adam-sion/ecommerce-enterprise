package adam.dev.ecom_enterprise.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Table(name = "users")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class User extends JTVEntity {

    @Column
    private String email;

    @Column
    private String name;

    @Column
    private String password;

    @Column
    private String oauthProvider;

    @Column
    private String oauthId;

    @Column
    private String picture;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference(value = "user-orders")
    private List<Order> orders;

}
