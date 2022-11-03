package com.example.backend.repository;

import com.example.backend.model.Tool;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FFTRepository extends MongoRepository<Tool, String> {
}
