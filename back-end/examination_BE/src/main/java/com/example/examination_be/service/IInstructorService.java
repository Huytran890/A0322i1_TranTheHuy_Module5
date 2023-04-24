package com.example.examination_be.service;

import com.example.examination_be.model.Instructor;

import java.util.List;

public interface IInstructorService {
    List<Instructor> findAll();

    Instructor findById(Integer id);
}
