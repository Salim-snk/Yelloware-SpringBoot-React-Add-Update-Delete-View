package com.yelloware.app.repository;
import com.yelloware.app.model.Candidates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository


public interface CandidatesRepository extends JpaRepository<Candidates, Long>{

}
