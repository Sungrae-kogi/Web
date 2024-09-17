package ArgumentResolver;
import jakarta.servlet.http.HttpServletRequest;
import org.example.authfilter.annotation.Auth;
import org.example.authfilter.dto.AuthUser;
import org.springframework.core.MethodParameter;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

// Filter와 ArgumentResolver는 외우는것이 아니라, Spring의 도구 중 하나라는 것으로 생각.

// Filter 다음에 ArgumentResolver로 전달하고싶어서 ArgumentResolver도 만들었다, 그러고 마찬가지로
// Bean 등록 어노테이션이 없으므로, 수동으로 등록해줘야 하는데.
public class AuthUserArgumentResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasAuthAnnotation = parameter.getParameterAnnotation(Auth.class) != null;
        boolean isAuthUserType = parameter.getParameterType().equals(AuthUser.class);

        // @Auth 어노테이션과 AuthUser 타입이 함께 사용되지 않은 경우 예외 발생
        if (hasAuthAnnotation != isAuthUserType) {
            throw new IllegalArgumentException("@Auth와 AuthUser 타입은 함께 사용되어야 합니다.");
        }

        return hasAuthAnnotation;
    }

    @Override
    public Object resolveArgument(
            @Nullable MethodParameter parameter,
            @Nullable ModelAndViewContainer mavContainer,
            NativeWebRequest webRequest,
            @Nullable WebDataBinderFactory binderFactory
    ) {
        HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();

        // JwtFilter 에서 set 한 userId, email 값을 가져옴
        Long userId = (Long) request.getAttribute("userId");
        String email = (String) request.getAttribute("email");

        return new AuthUser(userId, email);
    }
}