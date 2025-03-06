package com.vlearning.KLTND.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vlearning.KLTND.domain.User;
import com.vlearning.KLTND.domain.dto.request.LoginReq;
import com.vlearning.KLTND.domain.dto.response.ResponseDTO;
import com.vlearning.KLTND.domain.dto.response.UserAuth;
import com.vlearning.KLTND.service.UserService;
import com.vlearning.KLTND.util.exception.CustomException;
import com.vlearning.KLTND.util.security.SecurityUtil;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1")
public class AuthController {

    @Autowired
    private AuthenticationManagerBuilder authenticationManagerBuilder;

    @Autowired
    private SecurityUtil securityUtil;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO<UserAuth>> login(@RequestBody @Valid LoginReq userLogin)
            throws CustomException {

        // Nạp input gồm username/password vào Security
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                userLogin.getLoginName(), userLogin.getPassword());

        // xác thực người dùng
        /*
         *
         * Dòng này thực hiện việc xác thực thông qua authenticationManagerBuilder.
         * authenticationManagerBuilder sẽ kiểm tra thông tin đăng nhập và gọi đến
         * UserDetailsService (hoặc loadUserByUsername()) để nạp thông tin người dùng từ
         * database.
         *
         * Nếu thông tin là hợp lệ, quá trình xác thực thành công và một đối tượng
         * Authentication chứa thông tin xác thực sẽ được trả về.
         *
         */
        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken);

        // lưu thông tin vào context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // response custom
        User user = this.userService.handleGetUserByUsername(userLogin.getLoginName());

        UserAuth responseUser = new UserAuth(
                user.getId(),
                user.getEmail(),
                user.getFullName(),
                user.getRole().getRoleValue(),
                "");

        ResponseDTO<UserAuth> res = new ResponseDTO<>();
        res.setStatus(HttpStatus.OK.value());
        res.setMessage("Login success");

        // create a token
        // truyền vào thông tin đăng nhập của người dùng để lấy token
        String accessToken = this.securityUtil.createAccessToken(responseUser);
        responseUser.setAccessToken(accessToken);

        res.setData(responseUser);
        return ResponseEntity.ok(res);
    }
}
