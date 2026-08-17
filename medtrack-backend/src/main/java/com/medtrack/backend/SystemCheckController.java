package com.medtrack.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class SystemCheckController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/health")
    public Map<String, Object> checkHealth() {
        Map<String, Object> response = new HashMap<>();
        try {

            String time = jdbcTemplate.queryForObject("SELECT NOW()", String.class);
            response.put("status", "UP");
            response.put("database", "Connected to Supabase PostgreSQL");
            response.put("dbTime", time);
        } catch (Exception e) {
            response.put("status", "DOWN");
            response.put("database", "Connection Failed: " + e.getMessage());
        }
        return response;
    }
}
