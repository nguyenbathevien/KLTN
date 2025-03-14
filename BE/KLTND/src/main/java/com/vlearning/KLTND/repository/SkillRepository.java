package com.vlearning.KLTND.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vlearning.KLTND.domain.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

}
