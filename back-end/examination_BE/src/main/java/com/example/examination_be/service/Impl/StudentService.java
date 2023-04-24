package com.example.examination_be.service.Impl;

import com.example.examination_be.model.Student;
import com.example.examination_be.repository.StudentRepository;
import com.example.examination_be.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void save(Student student) {
        this.studentRepository.save(student);
    }

    @Override
    public void update(Student studentReceived, Integer id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setStudentCode(studentReceived.getStudentCode());
            student.setStudentName(studentReceived.getStudentName());
            student.setEmail(studentReceived.getEmail());
            student.setPhoneNumber(studentReceived.getPhoneNumber());
            student.setAssociation(studentReceived.getAssociation());
            student.setInstructor(studentReceived.getInstructor());
            this.studentRepository.save(student);
        } else {
            System.out.println("CÓ LỖI TRONG QUÁ TRÌNH UPDATE!");
        }
    }
    @Override
    public void deleteById(Integer id) {
        this.studentRepository.deleteById(id);
    }

    @Override
    public Student findById(Integer id) {
        return this.studentRepository.findById(id).orElse(null);
    }

    @Override
    public List<Student> findAll() {
        return (List<Student>) this.studentRepository.findAll();
    }

    @Override
    public List<Student> findAllByRequirement(String valueReceived) {
        List<Student> students = this.studentRepository.findAllByRequirement(valueReceived);
        return students;
    }



}
