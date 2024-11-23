package com.politecnico.horarios.backend.model.Teacher;

import com.politecnico.horarios.backend.model.Student.Student;
import com.politecnico.horarios.backend.model.Subject.Subject;
import com.politecnico.horarios.backend.model.TimeBlock.TimeBlock;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "teacher_subjects")
public class TeacherSubject {

    @EmbeddedId
    private TeacherSubjectId id;

    @ManyToOne
    @MapsId("teacherId")
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @ManyToOne
    @MapsId("subjectId")
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "block_id")
    private TimeBlock timeBlock;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // Getters y Setters
    public TeacherSubjectId getId() {
        return id;
    }

    public void setId(TeacherSubjectId id) {
        this.id = id;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public TimeBlock getTimeBlock() {
        return timeBlock;
    }

    public void setTimeBlock(TimeBlock timeBlock) {
        this.timeBlock = timeBlock;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}