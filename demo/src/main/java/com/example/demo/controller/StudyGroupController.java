package com.example.demo.controller;

import com.example.demo.dao.StudyGroupJdbc;
import com.example.demo.model.StudyGroup;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudyGroupController {

    private final StudyGroupJdbc studyGroupJdbc;

    public StudyGroupController(StudyGroupJdbc studyGroupJdbc) {
        this.studyGroupJdbc = studyGroupJdbc;
    }

    @GetMapping("/study_group/{id}")
    public StudyGroup getStudyGroup(@PathVariable int id) {
        StudyGroup studyGroup = studyGroupJdbc.get(id);
        return studyGroup;
    }

    @GetMapping("/study_group/show_all")
    public List<StudyGroup> getStudyGroup() {
        return studyGroupJdbc.showAll();
    }
}
