package com.example.examination_be.repository;

import com.example.examination_be.dto.StudentDto;
import com.example.examination_be.model.Student;
import org.hibernate.transform.ResultTransformer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.ConstructorResult;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface StudentRepository extends JpaRepository<Student, Integer> {
//    @Query(value = "SELECT s.studentCode, s.studentName, s.email, s.phoneNumber, g.groupName, g.projectName, i.instructorName " +
//            "FROM Student s " +
//            "JOIN Association g ON s.association.id = g.id " +
//            "JOIN Instructor i ON s.instructor.id = i.id " +
//            "WHERE s.studentName LIKE %?1% OR s.email LIKE %?1% OR g.groupName LIKE %?1% OR g.projectName LIKE %?1% OR i.instructorName LIKE %?1%")
//    List<Student> findAllByRequirement(String valueReceived);

    @Query(value = "SELECT s FROM Student s " +
            "JOIN s.association g " +
            "JOIN s.instructor i " +
            "WHERE s.studentName LIKE %:valueReceived% " +
            "OR s.email LIKE %:valueReceived% " +
            "OR g.groupName LIKE %:valueReceived% " +
            "OR g.projectName LIKE %:valueReceived% " +
            "OR i.instructorName LIKE %:valueReceived%")
    List<Student> findAllByRequirement(@Param("valueReceived") String valueReceived);


}
