package com.example.backend.controller;

import com.example.backend.model.Tool;
import com.example.backend.service.ToolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fft")
public class ToolController {

    private final ToolService service;

    @Autowired
    public ToolController(ToolService service) {
        this.service = service;
    }

    @GetMapping
    public List<Tool> getAllTools(){
        return service.findAllTools();
    }

    @GetMapping("{id}")
    public Tool getToolByID(@PathVariable String id) {
        return service.getTool(id);
    }
    @PostMapping
    public Tool postNewTool(@RequestBody Tool postTool){
        return service.addTool(postTool);
    }

    @PutMapping
    public Tool updateATool(@RequestBody Tool putTool){
        return service.updateTool(putTool);
    }
}
