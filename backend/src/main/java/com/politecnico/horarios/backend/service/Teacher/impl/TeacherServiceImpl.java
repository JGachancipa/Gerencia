package com.politecnico.horarios.backend.service.Teacher.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;
import com.politecnico.horarios.backend.repository.Teacher.TeacherSubjectRepository;
import com.politecnico.horarios.backend.service.Teacher.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService{
    private final TeacherSubjectRepository teacherSubjectRepository;

    public TeacherServiceImpl(TeacherSubjectRepository teacherSubjectRepository) {
        this.teacherSubjectRepository = teacherSubjectRepository;
    }

    @Override
    public List<TeacherSubject> getAllTeacherSubjects() {
        return teacherSubjectRepository.findAllWithTeachersAndSubjects();
    }
}
