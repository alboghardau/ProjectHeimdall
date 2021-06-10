package com.heimdall.ProjectHeimdallBackend.services;

import com.heimdall.ProjectHeimdallBackend.entities.Residence;

import com.heimdall.ProjectHeimdallBackend.repositories.ResidenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    private ResidenceRepository residenceRepository;

    @Autowired
    public ResidenceService(ResidenceRepository residenceRepository) {
        this.residenceRepository = residenceRepository;
    }

    public List<Residence> getResidenceList(){
        return this.residenceRepository.findAll();
    }

    public void addResidence(Residence residence){
        this.residenceRepository.saveAndFlush(residence);
    }

}
