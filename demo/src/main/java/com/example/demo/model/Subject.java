package com.example.demo.model;

public class Subject {
    private int id;
    private String name;
    private String short_name;
    private String type;

    public Subject(int id, String name, String short_name, String type) {
        this.id = id;
        this.name = name;
        this.short_name = short_name;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return short_name;
    }

    public void setShortName(String short_name) {
        this.short_name = short_name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
