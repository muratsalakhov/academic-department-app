package com.example.demo.model;

public class Student {
    private int id;
    private String surname;
    private String name;
    private String second_name;
    private int study_group_id;

    public Student(int id, String surname, String name, String second_name, int study_group_id) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.second_name = second_name;
        this.study_group_id = study_group_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSecondName() {
        return second_name;
    }

    public void setSecondName(String second_name) {
        this.second_name = second_name;
    }

    public int getStudyGroupId() {
        return study_group_id;
    }

    public void setStudyGroupId(int study_group_id) {
        this.study_group_id = study_group_id;
    }
}
