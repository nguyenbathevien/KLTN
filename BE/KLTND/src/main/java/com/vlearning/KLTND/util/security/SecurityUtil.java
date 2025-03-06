package com.vlearning.KLTND.util.security;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import com.vlearning.KLTND.domain.dto.response.UserAuth;

@Service
public class SecurityUtil {

    // thuật toán mã hóa
    public static final MacAlgorithm JWT_ALGORITHM = MacAlgorithm.HS512;

    @Value("${jwt.base64-secret}")
    private String jwtKey;

    @Value("${jwt.access-token-validity-in-seconds}")
    private long accessTokenExpiration;

    // @Value("${jwt.refresh-token-validity-in-seconds}")
    // private long refreshTokenExpiration;

    @Autowired
    private JwtEncoder jwtEncoder;

    public String createAccessToken(UserAuth user) {
        Instant currentTime = Instant.now();
        Instant validity = currentTime.plus(this.accessTokenExpiration, ChronoUnit.SECONDS);

        // hardcode permission
        List<String> listAuthority = new ArrayList<String>();
        listAuthority.add("ROOT");
        listAuthority.add("ADMIN");
        listAuthority.add("INSTRUCTOR");
        listAuthority.add("STUDENT");

        // header
        JwsHeader jwsHeader = JwsHeader.with(JWT_ALGORITHM).build();

        // payload
        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuedAt(currentTime)
                .expiresAt(validity)
                .subject(user.getEmail())
                .claim("user", user)
                // thêm 1 claim có tên permisson
                .claim("permission", listAuthority)
                .build();

        return this.jwtEncoder.encode(JwtEncoderParameters.from(jwsHeader, claims)).getTokenValue();
    }

    // public String createRefreshToken(UserAuth user) {
    // Instant currentTime = Instant.now();
    // Instant validity = currentTime.plus(this.refreshTokenExpiration,
    // ChronoUnit.SECONDS);

    // // header
    // JwsHeader jwsHeader = JwsHeader.with(JWT_ALGORITHM).build();

    // // payload
    // JwtClaimsSet claims = JwtClaimsSet.builder()
    // .issuedAt(currentTime)
    // .expiresAt(validity)
    // .subject(user.getEmail())
    // .claim("user", user)
    // .build();

    // return this.jwtEncoder.encode(JwtEncoderParameters.from(jwsHeader,
    // claims)).getTokenValue();
    // }
}
