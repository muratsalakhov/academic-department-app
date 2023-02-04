package com.example.demo.dao;

import com.example.demo.model.Student;
import com.example.demo.model.StudyGroup;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class StudyGroupJdbc {

    private final JdbcTemplate jdbcTemplate;

    public StudyGroupJdbc(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    public StudyGroup get(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM study_group WHERE id = ?", this::mapStudyGroup, id);
    }

    private StudyGroup mapStudyGroup(ResultSet rs, int i) throws SQLException {
        StudyGroup studyGroup = new StudyGroup(
                rs.getInt("id"),
                rs.getString("name")
        );
        return studyGroup;
    }

    // показать все группы
    public List<StudyGroup> showAll() {
        return jdbcTemplate.query("SELECT * FROM study_group", this::mapStudyGroup);
    }

    // удалить группу
    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM study_group WHERE id = ?", id);
    }
}
