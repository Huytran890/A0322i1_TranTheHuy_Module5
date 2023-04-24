package com.example.examination_be.service;

import com.example.examination_be.dto.StudentDto;
import com.example.examination_be.model.Student;

import java.util.List;

public interface IStudentService {
    void save(Student student);

    void deleteById(Integer id);

    Student findById(Integer id);

    void update(Student studentReceived, Integer id);

    List<Student> findAllByRequirement(String value);

    List<Student> findAll();
}
