package adam.dev.ecom_enterprise.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Data
public class User {

    @Id
    private UUID id;

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

    @Enumerated(value = EnumType.STRING)
    private Role role;

}
