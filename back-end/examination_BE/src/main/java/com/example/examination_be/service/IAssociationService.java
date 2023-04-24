package com.example.examination_be.service;

import com.example.examination_be.model.Association;

import java.util.List;

public interface IAssociationService {
    List<Association> findAll();

    Association findById(Integer id);
}
