package com.politecnico.horarios.backend.model.TimeBlock;

import jakarta.persistence.*;

@Entity
@Table(name = "time_blocks")
public class TimeBlock {

    @Id
    private int blockId;

    private String blockTime;

    public int getBlockId() {
        return blockId;
    }

    public void setBlockId(int blockId) {
        this.blockId = blockId;
    }

    public String getBlockTime() {
        return blockTime;
    }

    public void setBlockTime(String blockTime) {
        this.blockTime = blockTime;
    }
}
