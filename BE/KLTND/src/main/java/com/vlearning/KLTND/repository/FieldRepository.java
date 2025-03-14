package com.vlearning.KLTND.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.vlearning.KLTND.domain.Field;

@Repository
public interface FieldRepository extends JpaRepository<Field, Long>, JpaSpecificationExecutor<Field> {

    Field findByName(String name);
}
