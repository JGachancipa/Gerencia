package com.politecnico.horarios.backend.model.Schedule;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ScheduleRequest {
    private String model;
    private List<Message> message;

    public ScheduleRequest(String model, String prompt){
        this.model = model;
        this.message = new ArrayList<>();
        this.message.add(new Message("user", prompt));
    }
}
