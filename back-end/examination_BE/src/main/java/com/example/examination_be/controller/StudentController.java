package com.example.examination_be.controller;

import com.example.examination_be.dto.StudentDto;
import com.example.examination_be.model.Student;
import com.example.examination_be.service.Impl.StudentService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

//    @GetMapping("list")
//    public ResponseEntity<List<Student>> getAllStudent(@RequestParam(value = "valueReceived", defaultValue = "") String valueReceived) {
//        List<Student> students = this.studentService.findAllByRequirement(valueReceived.toLowerCase());
//        if (students.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(students, HttpStatus.OK);
//    }

    @GetMapping("list")
    public ResponseEntity<List<Student>> getAllStudent(@RequestParam(required = false) String valueReceived) {
        List<Student> students;
        if (valueReceived == null) {
            students = studentService.findAll();
        } else {
            students = studentService.findAllByRequirement(valueReceived.toLowerCase());
        }
        if (students.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("list/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") Integer id) {
        Optional<Student> optionalStudent = Optional.ofNullable(studentService.findById(id));
        return optionalStudent.map(
                student -> new ResponseEntity<>(student, HttpStatus.OK)).orElseGet(()
                -> new ResponseEntity<>(HttpStatus.NOT_FOUND)
        );
    }

    @PostMapping("create")
    public ResponseEntity<List<FieldError>> create(@Validated @RequestBody StudentDto studentDto,
                                                   BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }
        Student student = new Student();
        BeanUtils.copyProperties(studentDto, student, "id");
        this.studentService.save(student);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("detail/{id}")
    public ResponseEntity<Student> showDetail(@PathVariable("id") Integer id) {
        Optional<Student> optionalStudent = Optional.ofNullable(studentService.findById(id));
        if (!optionalStudent.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(optionalStudent.get(), HttpStatus.OK);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<List<FieldError>> edit(@Validated @RequestBody StudentDto studentDto,
                                                 BindingResult bindingResult,
                                                 @PathVariable("id") Integer id) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }

        // Kiểm tra xem student có tồn tại trong database hay không
        Optional<Student> optionalStudent = Optional.ofNullable(studentService.findById(id));
        if (!optionalStudent.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Lấy thông tin student cần update
        Student student = optionalStudent.get();
        // Copy thông tin từ DTO vào entity
        BeanUtils.copyProperties(studentDto, student, "id");

        // Lưu thông tin student đã cập nhật vào database
        studentService.update(student, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Student> delete(@PathVariable("id") Integer id) {
        // Kiểm tra xem student có tồn tại trong database hay không
        Optional<Student> optionalStudent = Optional.ofNullable(studentService.findById(id));
        if (!optionalStudent.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Xóa student khỏi database
        studentService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
