package com.example.demo.dao;

import com.example.demo.model.Mark;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class MarkJdbc {

    private final JdbcTemplate jdbcTemplate;

    public MarkJdbc(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    public Mark get(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM mark WHERE id = ?", this::mapMark, id);
    }

    private Mark mapMark(ResultSet rs, int i) throws SQLException {
        Mark mark = new Mark(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getString("value")
        );
        return mark;
    }

    // показать все оценки
    public List<Mark> showAll() {
        return jdbcTemplate.query("SELECT * FROM mark", this::mapMark);
    }
}
