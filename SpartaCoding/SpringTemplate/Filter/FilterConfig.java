package Filter;
@Configuration
@RequiredArgsConstructor
public class FilterConfig {

    private final JwtUtil jwtUtil;

    // 만들었던 JwtFilter.java는 Bean으로 등록하는 어노테이션이 포함되어있지 않으므로, 수동으로 빈 등록을 해야한다.
    @Bean
    public FilterRegistrationBean<JwtFilter> jwtFilter() {
        FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new JwtFilter(jwtUtil));
        registrationBean.addUrlPatterns("/*");

        return registrationBean;
    }
}