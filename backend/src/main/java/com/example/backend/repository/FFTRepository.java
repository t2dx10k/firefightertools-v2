package com.example.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FFTRepository extends MongoRepository<Tool, String> {
}
