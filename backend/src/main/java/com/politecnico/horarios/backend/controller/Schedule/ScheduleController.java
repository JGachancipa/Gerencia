package com.politecnico.horarios.backend.controller.Schedule;

import com.politecnico.horarios.backend.model.Schedule.ScheduleRequest;
import com.politecnico.horarios.backend.model.Schedule.ScheduleResponse;
import com.politecnico.horarios.backend.service.ChatGPTService.ScheduleService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScheduleController {

    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @PostMapping("/api/schedule/{studentId}")
    public ScheduleResponse getSchedule(@PathVariable int studentId,
            @RequestBody ScheduleRequest request) {
        return scheduleService.getSchedule(studentId, request.getPreferences());
    }
}
