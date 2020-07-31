package com.example.demo.model;

public class Journal {
    private int id;
    private int student_id;
    private int study_plan_id;
    private Integer in_time; // в бд тип bit (0,1,null), поэтому Integer
    private int count;
    private int mark_id;

    public Journal(int id, int student_id, int study_plan_id, Integer in_time, int count, int mark_id) {
        this.id = id;
        this.student_id = student_id;
        this.study_plan_id = study_plan_id;
        this.in_time = in_time;
        this.count = count;
        this.mark_id = mark_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudentId() {
        return student_id;
    }

    public void setStudentId(int student_id) {
        this.student_id = student_id;
    }

    public int getStudyPlanId() {
        return study_plan_id;
    }

    public void setStudyPlanId(int study_plan_id) {
        this.study_plan_id = study_plan_id;
    }

    public Integer getInTime() {
        return in_time;
    }

    public void setInTime(Integer in_time) {
        this.in_time = in_time;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getMarkId() {
        return mark_id;
    }

    public void setMarkId(int mark_id) {
        this.mark_id = mark_id;
    }
}
