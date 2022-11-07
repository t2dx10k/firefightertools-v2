package com.example.backend.repository;

import com.example.backend.model.Tool;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FFTRepository extends MongoRepository<Tool, String> {
}
