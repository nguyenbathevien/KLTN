package com.vlearning.KLTND.domain;

import java.time.Instant;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.vlearning.KLTND.util.constant.CourseApproveEnum;
import com.vlearning.KLTND.util.validator.Require;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = "Course's title can not be blank")
    private String title;

    @Column(columnDefinition = "MEDIUMTEXT")
    @NotBlank(message = "Description can not be blank")
    private String description;

    private String image;

    @ManyToOne()
    @JoinColumn(name = "own_by")
    @JsonIgnoreProperties(value = { "password", "role", "fields", "skills", "ownCourses",
            "purchasedCourses", "favoriteCourses", "voucherProgresses", "achievementProgresses", "comments",
            "reactions", "userNotifications", "followings", "followers", "active", "protect", "createdAt",
            "updatedAt" })
    private User ownBy;

    private Long price;

    @Enumerated(EnumType.STRING)
    private CourseApproveEnum status;

    // chapter

    @ManyToOne
    @JoinColumn(name = "field_id")
    @JsonIgnoreProperties(value = { "skills", "active" })
    @Require(message = "Field require")
    private Field field;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "courses_skills", joinColumns = @JoinColumn(name = "course_id"), inverseJoinColumns = @JoinColumn(name = "skill_id"))
    @JsonIgnoreProperties(value = { "field", "active" })
    @Require(message = "Skill require")
    private List<Skill> skills;

    private boolean active;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a", timezone = "GMT+7")
    private Instant createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a", timezone = "GMT+7")
    private Instant updatedAt;

    @PrePersist
    public void handleBeforeCreate() {
        // gán thời gian hiện tại
        this.createdAt = Instant.now();
        this.setActive(true);
    }

    @PreUpdate
    public void handleBeforeUpdate() {
        this.updatedAt = Instant.now();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public User getOwnBy() {
        return ownBy;
    }

    public void setOwnBy(User ownBy) {
        this.ownBy = ownBy;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public CourseApproveEnum getStatus() {
        return status;
    }

    public void setStatus(CourseApproveEnum status) {
        this.status = status;
    }

    public Field getField() {
        return field;
    }

    public void setField(Field field) {
        this.field = field;
    }

    public List<Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Skill> skills) {
        this.skills = skills;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

}
