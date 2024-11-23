package com.politecnico.horarios.backend.service.Teacher;

import java.util.List;

import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;

public interface TeacherService {
    List<TeacherSubject> getAllTeacherSubjects();
}
