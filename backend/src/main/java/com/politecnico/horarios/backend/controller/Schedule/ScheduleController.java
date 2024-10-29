package com.politecnico.horarios.backend.controller.Schedule;

import com.politecnico.horarios.backend.model.Schedule.ScheduleResponse;
import com.politecnico.horarios.backend.service.ChatGPTService.ScheduleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScheduleController {

    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping("/api/schedule/{studentId}")
    public ScheduleResponse getSchedule(@PathVariable int studentId,
            @RequestParam(required = false) String preferences) {
        return scheduleService.getSchedule(studentId, preferences);
    }
}
