package com.example.backend.service;

import com.example.backend.model.Tool;
import com.example.backend.repository.FFTRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
