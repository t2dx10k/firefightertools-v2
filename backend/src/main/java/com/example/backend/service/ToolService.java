package com.example.backend.service;

import com.example.backend.model.Tool;
import com.example.backend.repository.FFTRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ToolService {

    private final FFTRepository repo;

    private final IDService idService;

    public ToolService(FFTRepository repo, IDService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Tool> findAllTools(){
        return repo.findAll();
    }

    public Tool addTool(Tool postTool){
        postTool.set_id(idService.generateID());
        return repo.save(postTool);
    }

    public Tool getToolByID(String id){
        return repo.findById(id)
                .orElseThrow(NoSuchElementException::new);
    }

    public Tool updateTool(Tool tool){
        return repo.save(tool);
    }
}
