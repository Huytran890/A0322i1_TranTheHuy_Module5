package com.example.examination_be.service.Impl;

import com.example.examination_be.model.Instructor;
import com.example.examination_be.repository.InstructorRepository;
import com.example.examination_be.service.IInstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService implements IInstructorService {
    @Autowired
    private InstructorRepository instructorRepository;

    @Override
    public List<Instructor> findAll() {
        return this.instructorRepository.findAll();
    }

    @Override
    public Instructor findById(Integer id) {
        return this.instructorRepository.findById(id).orElse(null);
    }
}
