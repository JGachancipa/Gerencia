package com.politecnico.horarios.backend.model.Student;

import java.io.Serializable;
import jakarta.persistence.Embeddable;

@Embeddable
public class StudentSubjectId implements Serializable {
    private int studentId;
    private int subjectId;

    public StudentSubjectId() {
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof StudentSubjectId))
            return false;
        StudentSubjectId that = (StudentSubjectId) o;
        return studentId == that.studentId && subjectId == that.subjectId;
    }

    @Override
    public int hashCode() {
        return 31 * studentId + subjectId;
    }
}
