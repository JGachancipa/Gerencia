package com.politecnico.horarios.backend.service.ChatGPTService;

import com.politecnico.horarios.backend.model.Schedule.ScheduleResponse;

public interface ScheduleService {
    /**
     * Obtiene el horario para un estudiante basado en su ID y preferencias.
     *
     * @param studentId   El ID del estudiante.
     * @param preferences  Las preferencias adicionales para la generación del horario.
     * @return            Un objeto ScheduleResponse que contiene el horario generado.
     * @throws IllegalArgumentException si el estudiante no se encuentra o no se pueden obtener materias y profesores.
     */
    ScheduleResponse getSchedule(int studentId, String preferences);
}
