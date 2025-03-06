package com.vlearning.KLTND.domain.dto.response;

public class UserAuth {

    private Long id;

    private String email;

    private String fullName;

    private String role;

    private String accessToken;

    public UserAuth(Long id, String email, String fullName, String role, String accessToken) {
        this.id = id;
        this.email = email;
        this.fullName = fullName;
        this.role = role;
        this.accessToken = accessToken;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

}
