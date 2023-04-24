package com.example.examination_be.service.Impl;

import com.example.examination_be.model.Association;
import com.example.examination_be.repository.GroupRepository;
import com.example.examination_be.service.IGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService implements IGroupService {
    @Autowired
    private GroupRepository groupRepository;

    @Override
    public List<Association> findAll() {
        return this.groupRepository.findAll();
    }

    @Override
    public Association findById(Integer id) {
        return this.groupRepository.findById(id).orElse(null);
    }
}
