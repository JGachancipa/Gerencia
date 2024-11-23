package com.politecnico.horarios.backend.service;

import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;
import com.politecnico.horarios.backend.repository.Teacher.TeacherSubjectRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import com.politecnico.horarios.backend.service.Teacher.impl.TeacherServiceImpl;

public class TeacherServiceTest {
    @InjectMocks
    private TeacherServiceImpl teacherSubjectService;

    @Mock
    private TeacherSubjectRepository teacherSubjectRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllTeacherSubjects() {
        // Arrange
        TeacherSubject ts1 = new TeacherSubject();
        TeacherSubject ts2 = new TeacherSubject();
        List<TeacherSubject> teacherSubjects = Arrays.asList(ts1, ts2);
        
        when(teacherSubjectRepository.findAllWithTeachersAndSubjects()).thenReturn(teacherSubjects);

        // Act
        List<TeacherSubject> result = teacherSubjectService.getAllTeacherSubjects();

        // Assert
        assertEquals(2, result.size());
    }

}
