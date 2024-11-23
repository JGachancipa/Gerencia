package com.politecnico.horarios.backend.model.Schedule;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ScheduleRequest {
    private String model;
    private List<Message> message;
    private String preferences;

    public ScheduleRequest(String model, String prompt) {
        this.model = model;
        this.message = new ArrayList<>();
        this.message.add(new Message("user", prompt));
    }

    public String getPreferences() {
        return this.preferences;
    }

    public void setPreferences(String preferences) {
        this.preferences = preferences;
    }
}
