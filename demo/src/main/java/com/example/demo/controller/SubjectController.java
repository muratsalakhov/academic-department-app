package com.example.demo.controller;

import com.example.demo.dao.SubjectJdbc;
import com.example.demo.model.Subject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SubjectController {

    private final SubjectJdbc subjectJdbc;

    public SubjectController(SubjectJdbc subjectJdbc) {
        this.subjectJdbc = subjectJdbc;
    }

    @GetMapping("/subject/{id}")
    public Subject getSubject(@PathVariable int id) {
        Subject subject = subjectJdbc.get(id);
        return subject;
    }

    @GetMapping("/subject/show_all")
    public List<Subject> showAll() {
        return subjectJdbc.showAll();
    }
}
