package com.example.demo.controller;

import com.example.demo.dao.StudentJdbc;
import com.example.demo.model.Mark;
import com.example.demo.model.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {

    private final StudentJdbc studentJdbc;

    public StudentController(StudentJdbc studentJdbc) {
        this.studentJdbc = studentJdbc;
    }

    @GetMapping("/student/{id}") // показать студента по id
    public Student getStudent(@PathVariable int id) {
        Student student = studentJdbc.get(id);
        return student;
    }
    /*
    @GetMapping("/student/new/id={id}&surname={surname}&name={name}&second_name={second_name}&study_group_id={study_group_id}") // добавить студента
    public Student addStudent(@PathVariable int id,@PathVariable String surname,@PathVariable String name,@PathVariable String second_name,@PathVariable int study_group_id) {
        Student student = new Student(id, surname, name, second_name, study_group_id);
        student = studentJdbc.addStudent(student);
        return student;
    }*/

    @GetMapping("/student/show_all") // показать всех студентов
    public List<Student> showAll() {
        return studentJdbc.showAll();
    }

    @GetMapping("/student/group_id/{group_id}") // показать по группе
    public List<Student> showByGroup(@PathVariable int group_id) {
        return studentJdbc.showByGroup(group_id);
    }

    @GetMapping("/student/name/{student_name}") // показать студента по имени
    public List<Student> showByName(@PathVariable String student_name) {
        return studentJdbc.showByName(student_name);
    }
}
