package com.example.examination_be.dto;

import com.example.examination_be.model.Association;
import com.example.examination_be.model.Instructor;

public class StudentDto {
    private Integer id;

    private String studentCode;

    private String studentName;

    private String email;

    private String phoneNumber;

    private Association association;

    private Instructor instructor;

    public StudentDto() {}

    public StudentDto(Integer id, String studentCode, String studentName, String email, String phoneNumber, Association association, Instructor instructor) {
        this.id = id;
        this.studentCode = studentCode;
        this.studentName = studentName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.association = association;
        this.instructor = instructor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStudentCode() {
        return studentCode;
    }

    public void setStudentCode(String studentCode) {
        this.studentCode = studentCode;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Association getAssociation() {
        return association;
    }

    public void setAssociation(Association association) {
        this.association = association;
    }

    public Instructor getInstructor() {
        return instructor;
    }

    public void setInstructor(Instructor instructor) {
        this.instructor = instructor;
    }
}
