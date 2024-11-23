package com.politecnico.horarios.backend.service.ChatGPTService.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.politecnico.horarios.backend.model.Schedule.ScheduleRequest;
import com.politecnico.horarios.backend.model.Schedule.ScheduleResponse;
import com.politecnico.horarios.backend.service.ChatGPTService.ScheduleService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.politecnico.horarios.backend.model.Student.Student;
import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;
import com.politecnico.horarios.backend.repository.Student.StudentRepository;
import com.politecnico.horarios.backend.repository.Teacher.TeacherSubjectRepository;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Value("${chatgpt.api.model}")
    private String model;

    @Value("${chatgpt.api.url}")
    private String apiURL;

    private final RestTemplate restTemplate;
    private final StudentRepository studentRepository;
    private final TeacherSubjectRepository teacherSubjectRepository;

    public ScheduleServiceImpl(RestTemplate restTemplate, StudentRepository studentRepository,
                               TeacherSubjectRepository teacherSubjectRepository) {
        this.restTemplate = restTemplate;
        this.studentRepository = studentRepository;
        this.teacherSubjectRepository = teacherSubjectRepository;
    }

    @Override
    public ScheduleResponse getSchedule(int studentId, String preferences) {
        final Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Estudiante no encontrado"));
        
        List<TeacherSubject> teacherSubjects = teacherSubjectRepository.findAll();
        if (teacherSubjects.isEmpty()) {
            throw new IllegalArgumentException("No se encontraron materias y profesores para el estudiante.");
        }

        String prompt = buildPrompt(student, teacherSubjects, preferences);
        
        System.out.println("Prompt generado: \n" + prompt);

        ScheduleRequest req = new ScheduleRequest(model, prompt);
        ScheduleResponse rawResponse = restTemplate.postForObject(apiURL, req, ScheduleResponse.class);
        if (rawResponse == null || rawResponse.getChoices().isEmpty()) {
            throw new RuntimeException("La respuesta de la API es nula o no contiene elecciones.");
        }

        String rawText = rawResponse.getChoices().get(0).getMessage().getContent();
        return parseScheduleResponse(rawText);
    }

    private String buildPrompt(Student student, List<TeacherSubject> teacherSubjects, String preferences) {
        String subjectDetails = teacherSubjects.stream()
                .map(ts -> String.format("%s - %s", ts.getSubject().getName(),
                        ts.getTeacher().getName()))
                .collect(Collectors.joining(", "));

        return String.format("""
            Necesito un horario para el estudiante %s basado en las siguientes especificaciones:

            1. **Materias y Profesores**: %s
            2. **Preferencias Adicionales**: %s

            Genera el horario en un formato JSON organizado por días, donde cada día contenga un array de bloques horarios disponibles.
            """, student.getName(), subjectDetails,
            preferences != null ? preferences : "Ninguna");

    }

    private ScheduleResponse parseScheduleResponse(String rawText) {
        ObjectMapper mapper = new ObjectMapper();
        ScheduleResponse structuredResponse = new ScheduleResponse();
        try {
            structuredResponse.setSchedule(
                    mapper.readValue(rawText, new TypeReference<Map<String, List<ScheduleResponse.ScheduleEntry>>>() {
                    }));
        } catch (JsonProcessingException e) {
            System.out.println("Error al parsear la respuesta de ChatGPT: " + e.getMessage());
        }
        return structuredResponse;
    }
}
