package com.example.examination_be.repository;

import com.example.examination_be.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    @Query(value = "SELECT s.studentCode, s.studentName, s.email, s.phoneNumber, g.groupName, g.projectName, i.instructorName" +
            "FROM Student s " +
            "JOIN Association g ON s.group_id = g.id " +
            "JOIN Instructor i ON s.instructor_id = i.id " +
            "WHERE s.studentName LIKE %?1% OR s.email LIKE %?1% OR g.groupName LIKE %?1% OR g.projectName LIKE %?1% OR i.instructorName LIKE %?1%",
            nativeQuery = true)
    List<Student> findAllByRequirement(String value);
}
