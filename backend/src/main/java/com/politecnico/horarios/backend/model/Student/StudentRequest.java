package com.politecnico.horarios.backend.model.Student;

import java.util.List;
import lombok.Data;

@Data
public class StudentRequest {
    private String studentName;
    private String professorName;
    private List<String> subject;
    private List<String> preferences;
    private List<String> availability;

    public StudentRequest() {
    }

    public StudentRequest(String studentName, String professorName, List<String> subject, List<String> preferences,
            List<String> availability) {
        this.studentName = studentName;
        this.professorName = professorName;
        this.subject = subject;
        this.preferences = preferences;
        this.availability = availability;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getProfessorName() {
        return professorName;
    }

    public void setProfessorName(String professorName) {
        this.professorName = professorName;
    }

    public List<String> getSubject() {
        return subject;
    }

    public void setSubject(List<String> subject) {
        this.subject = subject;
    }

    public List<String> getPreferences() {
        return preferences;
    }

    public void setPreferences(List<String> preferences) {
        this.preferences = preferences;
    }

    public List<String> getAvailability() {
        return availability;
    }

    public void setAvailability(List<String> availability) {
        this.availability = availability;
    }
}
