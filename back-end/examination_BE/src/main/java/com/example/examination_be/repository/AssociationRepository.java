package com.example.examination_be.repository;

import com.example.examination_be.model.Association;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Association, Integer> {
}
