package com.example.examination_be.controller;

import com.example.examination_be.model.Instructor;
import com.example.examination_be.service.IInstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/instructors")
public class InstructorController {

    @Autowired
    private IInstructorService instructorService;

    @GetMapping("/list")
    public ResponseEntity<List<Instructor>> getAllInstructors() {
        List<Instructor> instructors = instructorService.findAll();
        if (!instructors.isEmpty()) {
            return new ResponseEntity<>(instructors, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

//    @GetMapping("/search/{id}")
//    public ResponseEntity<Instructor> getInstructorById(@PathVariable Integer id) {
//        Instructor instructor = this.instructorService.findById(id);
//        if (instructor == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
