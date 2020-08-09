package com.example.demo.controller;

import com.example.demo.dao.StudentJdbc;
import com.example.demo.model.Mark;
import com.example.demo.model.Student;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class StudentController {

    private final StudentJdbc studentJdbc;

    public StudentController(StudentJdbc studentJdbc) {
        this.studentJdbc = studentJdbc;
    }

    // показать студента по id
    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable int id) {
        Student student = studentJdbc.get(id);
        return student;
    }

    // показать всех студентов
    @GetMapping("/student/show_all")
    public List<Student> showAll() {
        return studentJdbc.showAll();
    }

    // показать по группе
    @GetMapping("/student/group_id/{group_id}")
    public List<Student> showByGroup(@PathVariable int group_id) {
        return studentJdbc.showByGroup(group_id);
    }

    // показать студента по имени
    @GetMapping("/student/name/{student_name}")
    public List<Student> showByName(@PathVariable String student_name) {
        return studentJdbc.showByName(student_name);
    }

    // добавить студента
    @RequestMapping(value="/student/new/", method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public int addStudent(@RequestBody Student newStudent) {
        return studentJdbc.addStudent(newStudent);
    }

    // редактировать студента
    @RequestMapping(value="/student/{id}", method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public int editStudent(@PathVariable int id, @RequestBody Student newStudent) {
        return studentJdbc.editStudent(id, newStudent);
    }

    // удалить студента
    @DeleteMapping("/student/{id}")
    public int editStudent(@PathVariable int id) {
        return studentJdbc.deleteStudent(id);
    }
}
