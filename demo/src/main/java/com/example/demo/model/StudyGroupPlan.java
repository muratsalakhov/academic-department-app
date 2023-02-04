package com.example.demo.model;

public class StudyGroupPlan {
    private int id;
    private int study_group_id;
    private int first_subject_id;
    private int second_subject_id;
    private int third_subject_id;
    private int fourth_subject_id;
    private int fifth_subject_id;

    public StudyGroupPlan(int id, int study_group_id, int first_subject_id, int second_subject_id, int third_subject_id, int fourth_subject_id, int fifth_subject_id) {
        this.id = id;
        this.study_group_id = study_group_id;
        this.first_subject_id = first_subject_id;
        this.second_subject_id = second_subject_id;
        this.third_subject_id = third_subject_id;
        this.fourth_subject_id = fourth_subject_id;
        this.fifth_subject_id = fifth_subject_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudy_group_id() {
        return study_group_id;
    }

    public void setStudy_group_id(int study_group_id) {
        this.study_group_id = study_group_id;
    }

    public int getFirst_subject_id() {
        return first_subject_id;
    }

    public void setFirst_subject_id(int first_subject_id) {
        this.first_subject_id = first_subject_id;
    }

    public int getSecond_subject_id() {
        return second_subject_id;
    }

    public void setSecond_subject_id(int second_subject_id) {
        this.second_subject_id = second_subject_id;
    }

    public int getThird_subject_id() {
        return third_subject_id;
    }

    public void setThird_subject_id(int third_subject_id) {
        this.third_subject_id = third_subject_id;
    }

    public int getFourth_subject_id() {
        return fourth_subject_id;
    }

    public void setFourth_subject_id(int fourth_subject_id) {
        this.fourth_subject_id = fourth_subject_id;
    }

    public int getFifth_subject_id() {
        return fifth_subject_id;
    }

    public void setFifth_subject_id(int fifth_subject_id) {
        this.fifth_subject_id = fifth_subject_id;
    }
}
