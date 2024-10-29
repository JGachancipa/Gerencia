package com.politecnico.horarios.backend.model.Schedule;

import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class ScheduleResponse {
    private List<Choice> choices;
    private Map<String, List<ScheduleEntry>> schedule;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Choice {
        private int index;
        private Message message;
    }

    @Data
    public static class ScheduleEntry {
        private String hora_inicio;
        private String hora_fin;
        private String materia;
    }
}
