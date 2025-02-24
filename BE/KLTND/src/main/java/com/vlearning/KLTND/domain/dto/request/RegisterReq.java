package com.vlearning.KLTND.domain.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterReq {

    @NotBlank(message = "Fullname can not be blank")
    private String fullName;

    @NotBlank(message = "Loginame can not be blank")
    private String loginName;

    @NotBlank(message = "Password can not be blank")
    private String password;
}
