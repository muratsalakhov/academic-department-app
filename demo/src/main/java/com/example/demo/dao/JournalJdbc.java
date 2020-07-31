package com.example.demo.dao;

import com.example.demo.model.Journal;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class JournalJdbc {

    private final JdbcTemplate jdbcTemplate;

    public JournalJdbc(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    public Journal get(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM journal WHERE id = ?", this::mapJournal, id);
    }

    private Journal mapJournal(ResultSet rs, int i) throws SQLException {
        Journal journal = new Journal(
                rs.getInt("id"),
                rs.getInt("student_id"),
                rs.getInt("study_plan_id"),
                rs.getInt("in_time"),
                rs.getInt("count"),
                rs.getInt("mark_id")
        );
        return journal;
    }

    /*public Journal searchByStudent(int student_id) {
        return jdbcTemplate.queryForObject("SELECT * FROM journal WHERE student_id = ?", Journal.class, student_id);
    }

    public Journal searchByGroup(String group_name) {
        return jdbcTemplate.queryForObject("SELECT * FROM journal, student, study_group WHERE journal.student_id = student.id AND student.study_group_id = study_group.id AND study_group.name = ?", Journal.class, group_name);
    }*/
}
