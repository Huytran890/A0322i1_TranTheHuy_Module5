package com.example.examination_be.service.Impl;

import com.example.examination_be.model.Association;
import com.example.examination_be.repository.AssociationRepository;
import com.example.examination_be.service.IAssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssociationService implements IAssociationService {
    @Autowired
    private AssociationRepository associationRepository;

    @Override
    public List<Association> findAll() {
        return this.associationRepository.findAll();
    }

    @Override
    public Association findById(Integer id) {
        return this.associationRepository.findById(id).orElse(null);
    }
}
