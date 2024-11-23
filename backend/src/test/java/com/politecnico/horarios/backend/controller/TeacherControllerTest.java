package com.politecnico.horarios.backend.controller;

import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.politecnico.horarios.backend.controller.Teacher.TeacherController;
import com.politecnico.horarios.backend.service.Teacher.impl.TeacherServiceImpl;

public class TeacherControllerTest {
    private MockMvc mockMvc;

    @InjectMocks
    private TeacherController teacherSubjectController;

    @Mock
    private TeacherServiceImpl teacherSubjectService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(teacherSubjectController).build();
    }

    @Test
    public void testGetAllTeacherSubjects() throws Exception {
        // Arrange
        TeacherSubject ts1 = new TeacherSubject();
        TeacherSubject ts2 = new TeacherSubject();
        List<TeacherSubject> teacherSubjects = Arrays.asList(ts1, ts2);

        when(teacherSubjectService.getAllTeacherSubjects()).thenReturn(teacherSubjects);

        // Act & Assert
        mockMvc.perform(get("/api/teacher-subjects")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

}
