package com.example.demo.dao;

import com.example.demo.model.Mark;
import com.example.demo.model.Student;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@Repository
public class StudentJdbc {

    private final JdbcTemplate jdbcTemplate;

    public StudentJdbc(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    public Student get(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM student WHERE id = ?", this::mapStudent, id);
    }

    private Student mapStudent(ResultSet rs, int i) throws SQLException {
        Student student = new Student(
                rs.getInt("id"),
                rs.getString("surname"),
                rs.getString("name"),
                rs.getString("second_name"),
                rs.getInt("study_group_id")
        );
        return student;
    }

    // поиск по имени сутдента
    public List<Student> showByName(String student_name) {
        return jdbcTemplate.query("SELECT * FROM student WHERE name = ?", this::mapStudent, student_name);
    }

    // всех локальных студентов
    public List<Student> getAllLocal() {
        return jdbcTemplate.query("SELECT * FROM student_local", this::mapStudent);
    }

    // показать всех студентов
    public List<Student> showAll() {
        return jdbcTemplate.query("SELECT * FROM student", this::mapStudent);
    }

    // показать по группе
    public List<Student> showByGroup(int group_id) {
        return jdbcTemplate.query("SELECT * FROM student WHERE study_group_id = ?", this::mapStudent, group_id);
    }

    // добавить студента
    public int addStudent(Student student) {
        System.out.println(student.getSurname());
        return jdbcTemplate.update("INSERT INTO student VALUES (?, ?, ?, ?, ?)", student.getId(), student.getSurname(), student.getName(), student.getSecondName(), student.getStudyGroupId());
    }

    // изменить студента
    public int editStudent(int id, Student student) {
        return jdbcTemplate.update("UPDATE student SET surname = ?2, name = ?3, second_name = ?4, study_group_id = ?5 where id = ?1", id, student.getSurname(), student.getName(), student.getSecondName(), student.getStudyGroupId());
    }

    // изменить группу студента
    public int editStudentGroup(int id, Student student) {
        return jdbcTemplate.update("UPDATE student SET study_group_id = ?2 where id = ?1", id, student.getStudyGroupId());
    }

    // удалить студента
    public int deleteStudent(int id) {
        return jdbcTemplate.update("DELETE FROM student WHERE id = ?", id);
    }
}
