package com.heimdall.ProjectHeimdallBackend.controllers;

import com.heimdall.ProjectHeimdallBackend.entities.Residence;
import com.heimdall.ProjectHeimdallBackend.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residence")
public class ResidenceController {

    private ResidenceService residenceService;

    @Autowired
    public ResidenceController(ResidenceService residenceService) {
        this.residenceService = residenceService;
    }

    @GetMapping("/getAll")
    public List<Residence> getResidences(){
        return this.residenceService.getResidenceList();
    }

    @PostMapping(value = "/add" , consumes = "application/json", produces = "application/json")
    public void addResidence(@RequestBody Residence residence){
        residenceService.addResidence(residence);
    }
}
