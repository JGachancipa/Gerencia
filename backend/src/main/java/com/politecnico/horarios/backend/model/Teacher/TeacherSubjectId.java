package com.politecnico.horarios.backend.model.Teacher;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Embeddable;

@Embeddable
public class TeacherSubjectId implements Serializable {

    private int teacherId;
    private int subjectId;
    private String weekday;

    // Constructor
    public TeacherSubjectId() {}

    public TeacherSubjectId(int teacherId, int subjectId, String weekday) {
        this.teacherId = teacherId;
        this.subjectId = subjectId;
        this.weekday = weekday;
    }

    // Getters y Setters
    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday;
    }

    // equals y hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherSubjectId that = (TeacherSubjectId) o;
        return teacherId == that.teacherId &&
               subjectId == that.subjectId &&
               weekday.equals(that.weekday);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teacherId, subjectId, weekday);
    }
}