package com.vlearning.KLTND.service;

import com.vlearning.KLTND.util.exception.CustomException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import com.vlearning.KLTND.domain.Field;
import com.vlearning.KLTND.domain.dto.response.ResultPagination;
import com.vlearning.KLTND.repository.FieldRepository;

@Service
public class FieldService {
    @Autowired
    private FieldRepository fieldRepository;

    public Field handleCreateField(Field field) throws CustomException {
        if (this.fieldRepository.findByName(field.getName()) != null) {
            throw new CustomException("Field exist");
        }

        return this.fieldRepository.save(field);
    }

    public ResultPagination handleFetchFields(Specification<Field> spec, Pageable pageable) {
        Page<Field> page = this.fieldRepository.findAll(spec, pageable);

        ResultPagination.Meta meta = new ResultPagination.Meta();
        meta.setPage(pageable.getPageNumber() + 1);
        meta.setSize(pageable.getPageSize());
        meta.setTotalPage(page.getTotalPages());
        meta.setTotalElement(page.getTotalElements());

        ResultPagination resultPagination = new ResultPagination();
        resultPagination.setResult(page.getContent());
        resultPagination.setMeta(meta);

        return resultPagination;
    }

    public void handleDeleteField(Long id) throws CustomException {
        if (this.fieldRepository.findById(id) != null) {
            throw new CustomException("Field not found");
        }

        this.fieldRepository.deleteById(id);
    }

    public Field handleUpdateField(Field field) throws CustomException {
        if (!this.fieldRepository.findById(field.getId()).isPresent()) {
            throw new CustomException("Field not found");
        }

        Field fieldDB = this.fieldRepository.findById(field.getId()).get();
        fieldDB.setName(field.getName());

        return this.fieldRepository.save(fieldDB);
    }

}
