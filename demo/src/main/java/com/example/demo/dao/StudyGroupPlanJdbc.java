package com.example.demo.dao;

import com.example.demo.model.StudyGroupPlan;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class StudyGroupPlanJdbc {

    private final JdbcTemplate jdbcTemplate;

    public StudyGroupPlanJdbc(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    public StudyGroupPlan get(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM study_group_plan WHERE id = ?", this::mapStudyGroupPlan, id);
    }

    private StudyGroupPlan mapStudyGroupPlan(ResultSet rs, int i) throws SQLException {
        StudyGroupPlan studyGroupPlan = new StudyGroupPlan(
                rs.getInt("id"),
                rs.getInt("study_group_id"),
                rs.getInt("first_subject_id"),
                rs.getInt("second_subject_id"),
                rs.getInt("third_subject_id"),
                rs.getInt("fourth_subject_id"),
                rs.getInt("fifth_subject_id")
        );
        return studyGroupPlan;
    }

    // показать все группы
    public List<StudyGroupPlan> showAll() {
        return jdbcTemplate.query("SELECT * FROM study_group_plan", this::mapStudyGroupPlan);
    }

    // удалить группу
    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM study_group_plan WHERE id = ?", id);
    }
}
