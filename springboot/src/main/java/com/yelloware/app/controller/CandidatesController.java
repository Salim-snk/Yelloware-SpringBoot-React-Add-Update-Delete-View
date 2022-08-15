package com.yelloware.app.controller;

import com.yelloware.app.exception.ResourceNotFoundException;
import com.yelloware.app.model.Candidates;
import com.yelloware.app.repository.CandidatesRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")



public class CandidatesController {
	@Autowired
	private CandidatesRepository candidatesRepository;
	private Long id;
	private Candidates candidatesDetails;

	//get all candidates
	@GetMapping("/candidates")
	public List<Candidates> getAllCandidates(){
		return  candidatesRepository.findAll();
    }
	//create candidates rest api
	@PostMapping("/candidates")
	public Candidates createCandidates(@RequestBody Candidates candidates){
		return candidatesRepository.save(candidates);
	}
	//get candidates rest api
	@GetMapping("/candidates/{id}")
	public ResponseEntity<Candidates> getCandidatesById(@PathVariable Long id) {
		Candidates candidates = candidatesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Candidates not exist with id :" + id));
		return ResponseEntity.ok(candidates);
}
// update candidates rest api

	@PutMapping("/candidates/{id}")
	public ResponseEntity<Candidates> updateCandidates(@PathVariable Long id, @RequestBody Candidates CandidatesDetails){

		Candidates candidates = candidatesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Candidates not exist with id :" + id));

		candidates.setFirstName(candidatesDetails.getFirstName());
		candidates.setLastName(candidatesDetails.getLastName());
		candidates.setEmailId(candidatesDetails.getEmailId());
		candidates.setCandidate_role(candidatesDetails.getCandidate_role());
		candidates.setactive(candidatesDetails.getactive());
		candidates.setFirstStartDate(candidatesDetails.getFirstStartDate());
		candidates.setSecondLanguageLevel(candidatesDetails.getSecondLanguageLevel());
        candidates.setDateOfBirth(candidatesDetails.getDateOfBirth());

		Candidates updatedCandidates = candidatesRepository.save(candidates);
		return ResponseEntity.ok(updatedCandidates);
	}

	// delete candidates rest api
	@DeleteMapping("/candidates/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCandidates(@PathVariable Long id) {

		Candidates candidates = candidatesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Candidates not exist with id :" + id));

		candidatesRepository.delete(candidates);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
