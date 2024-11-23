package com.politecnico.horarios.backend.controller.Teacher;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;
import com.politecnico.horarios.backend.service.Teacher.TeacherService;

@RestController
@RequestMapping("/api/teacher-subjects")
public class TeacherController {
    private final TeacherService teacherSubjectService;

    public TeacherController(TeacherService teacherSubjectService) {
        this.teacherSubjectService = teacherSubjectService;
    }

    @GetMapping
    public List<TeacherSubject> getAllTeacherSubjects() {
        return teacherSubjectService.getAllTeacherSubjects();
    }
}
