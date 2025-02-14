package adam.dev.ecom_enterprise.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

}
