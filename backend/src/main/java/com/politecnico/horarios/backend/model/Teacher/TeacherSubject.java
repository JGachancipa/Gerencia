package com.politecnico.horarios.backend.model.Teacher;

import java.util.Objects;

import com.politecnico.horarios.backend.model.Subject.Subject;
import com.politecnico.horarios.backend.model.TimeBlock.TimeBlock;

import jakarta.persistence.*;

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

    private String weekday;

    @ManyToOne
    @JoinColumn(name = "block_id")
    private TimeBlock timeBlock;

    @Column(name = "student_id")
    private int studentId;

    public TeacherSubject() {
    }

    public TeacherSubject(TeacherSubjectId id, Teacher teacher, Subject subject, String weekday, TimeBlock timeBlock, int studentId) {
        this.id = id;
        this.teacher = teacher;
        this.subject = subject;
        this.weekday = weekday;
        this.timeBlock = timeBlock;
        this.studentId = studentId;
    }

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

    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday;
    }

    public TimeBlock getTimeBlock() {
        return timeBlock;
    }

    public void setTimeBlock(TimeBlock timeBlock) {
        this.timeBlock = timeBlock;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    @Override
    public String toString() {
        return "TeacherSubject{" +
                "id=" + id +
                ", teacher=" + teacher +
                ", subject=" + subject +
                ", weekday='" + weekday + '\'' +
                ", timeBlock=" + timeBlock +
                ", studentId=" + studentId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TeacherSubject))
            return false;
        TeacherSubject that = (TeacherSubject) o;
        return id.equals(that.id) && studentId == that.studentId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, studentId);
    }
}
