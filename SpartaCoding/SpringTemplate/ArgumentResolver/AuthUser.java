package ArgumentResolver;

import lombok.Getter;

// AuthUserArgumentResolver.class 에서 쓰일 AuthUser 클래스라고 생각.
@Getter
public class AuthUser {
    private final Long id;
    private final String email;

    public AuthUser(Long id, String email){
        this.id = id;
        this.email = email;
    }
}
