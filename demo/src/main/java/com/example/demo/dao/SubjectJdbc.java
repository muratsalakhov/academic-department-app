package com.example.demo.dao;

import com.example.demo.model.Subject;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class SubjectJdbc {

    private final JdbcTemplate jdbcTemplate;

    public SubjectJdbc(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    public Subject get(int id) {
        return jdbcTemplate.queryForObject("SELECT DISTINCT SUBJECT.ID, SUBJECT.NAME, SUBJECT.SHORT_NAME, GROUP_CONCAT(EXAM_TYPE.TYPE) AS type FROM study_plan, subject, exam_type\n" +
                "WHERE STUDY_PLAN.SUBJECT_ID = SUBJECT.ID AND STUDY_PLAN.EXAM_TYPE_ID = EXAM_TYPE.ID AND SUBJECT.ID = ?\n" +
                "GROUP BY SUBJECT.NAME", this::mapSubject, id);
    }

    private Subject mapSubject(ResultSet rs, int i) throws SQLException {
        Subject subject = new Subject(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getString("short_name"),
                rs.getString("type")
        );
        return subject;
    }

    // показать все оценки
    public List<Subject> showAll() {
        return jdbcTemplate.query("SELECT DISTINCT SUBJECT.ID, SUBJECT.NAME, SUBJECT.SHORT_NAME, GROUP_CONCAT(EXAM_TYPE.TYPE) AS type FROM study_plan, subject, exam_type\n" +
                "WHERE STUDY_PLAN.SUBJECT_ID = SUBJECT.ID AND STUDY_PLAN.EXAM_TYPE_ID = EXAM_TYPE.ID\n" +
                "GROUP BY SUBJECT.NAME", this::mapSubject);
    }
}