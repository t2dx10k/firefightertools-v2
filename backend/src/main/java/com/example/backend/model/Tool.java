package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="tools")
public class Tool {
    @Id
    private String _id;
    private String name;
    private String img;
    private String description;
    private String video;
    private String link;
    private String quizQuestion;
    private String choiceA;
    private String choiceB;
    private String choiceC;
    private String correctChoice;
    private String incorrectChoice;
}
