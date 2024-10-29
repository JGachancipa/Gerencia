package com.politecnico.horarios.backend.model.Student;

import com.politecnico.horarios.backend.model.Subject.Subject;
import com.politecnico.horarios.backend.model.Teacher.Teacher;

import jakarta.persistence.*;

@Entity
@Table(name = "student_subjects")
public class StudentSubject {

    @EmbeddedId
    private StudentSubjectId id;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @MapsId("subjectId")
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    public StudentSubjectId getId() {
        return id;
    }

    public void setId(StudentSubjectId id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
