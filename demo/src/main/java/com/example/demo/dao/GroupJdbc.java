package com.example.demo.dao;

import com.example.demo.model.Group;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class GroupJdbc {

    private final JdbcTemplate jdbcTemplate;

    public GroupJdbc(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    public Group get(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM study_group WHERE id = ?", this::mapGroup, id);
    }

    private Group mapGroup(ResultSet rs, int i) throws SQLException {
        Group group = new Group(
                rs.getInt("id"),
                rs.getString("name")
        );
        return group;
    }

    // показать все оценки
    public List<Group> showAll() {
        return jdbcTemplate.query("SELECT * FROM study_group", this::mapGroup);
    }
}
