package com.vlearning.KLTND.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vlearning.KLTND.domain.User;
import com.vlearning.KLTND.domain.dto.response.ResultPagination;
import com.vlearning.KLTND.repository.UserRepository;
import com.vlearning.KLTND.util.exception.CustomException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    public User handleCreateUser(User user) throws CustomException {

        if (this.userRepository.findByEmail(user.getEmail()) != null) {
            throw new CustomException("User exist already!");
        }

        String passwordEncoded = encoder.encode(user.getPassword());
        user.setPassword(passwordEncoded);

        return this.userRepository.save(user);
    }

    public User handleFetchUser(Long id) {
        return this.userRepository.findById(id).isPresent() ? this.userRepository.findById(id).get() : null;
    }

    public ResultPagination handleFetchSeveralUser(Specification<User> spec, Pageable pageable) {

        Page<User> page = this.userRepository.findAll(spec, pageable);

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
}
