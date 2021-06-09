package com.heimdall.ProjectHeimdallBackend.repositories;

import com.heimdall.ProjectHeimdallBackend.entities.Residence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResidenceRepository extends JpaRepository <Residence, Integer> {

}
