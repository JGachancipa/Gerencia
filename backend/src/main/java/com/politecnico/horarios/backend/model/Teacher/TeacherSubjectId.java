package com.politecnico.horarios.backend.model.Teacher;

import java.io.Serializable;
import jakarta.persistence.Embeddable;

@Embeddable
public class TeacherSubjectId implements Serializable {
    
    private int teacherId;
    private int subjectId;

    public TeacherSubjectId() {
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TeacherSubjectId)) return false;
        TeacherSubjectId that = (TeacherSubjectId) o;
        return teacherId == that.teacherId && subjectId == that.subjectId;
    }

    @Override
    public int hashCode() {
        return 31 * teacherId + subjectId;
    }
}
