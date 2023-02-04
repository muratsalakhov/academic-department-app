package com.example.demo.controller;

import com.example.demo.dao.StudyGroupPlanJdbc;
import com.example.demo.model.StudyGroupPlan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudyGroupPlanController {

    private final StudyGroupPlanJdbc studyGroupPlanJdbc;

    public StudyGroupPlanController(StudyGroupPlanJdbc studyGroupPlanJdbc) {
        this.studyGroupPlanJdbc = studyGroupPlanJdbc;
    }

    @GetMapping("/study_group_plan/{id}")
    public StudyGroupPlan getStudyGroupPlan(@PathVariable int id) {
        StudyGroupPlan studyGroupPlan = studyGroupPlanJdbc.get(id);
        return studyGroupPlan;
    }

    @GetMapping("/study_group_plan/show_all")
    public List<StudyGroupPlan> getStudyGroupPlan() {
        return studyGroupPlanJdbc.showAll();
    }
}
