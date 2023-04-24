package com.example.examination_be.controller;

import com.example.examination_be.model.Association;
import com.example.examination_be.service.Impl.AssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/associations")
public class AssociationController {
    @Autowired
    private AssociationService groupService;

    @GetMapping("/list")
    public ResponseEntity<List<Association>> getAllInstructors() {
        List<Association> Associations = groupService.findAll();
        if (!Associations.isEmpty()) {
            return new ResponseEntity<>(Associations, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
