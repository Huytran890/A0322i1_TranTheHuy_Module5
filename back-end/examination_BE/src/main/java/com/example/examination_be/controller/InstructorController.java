package com.example.examination_be.controller;

import com.example.examination_be.service.IInstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/instructors")
public class InstructorRepository {

    @Autowired
    private IInstructorService instructorService;

    @GetMapping("/list")
    public ResponseEntity<>
}
