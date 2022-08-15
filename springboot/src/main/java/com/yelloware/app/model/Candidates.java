package com.yelloware.app.model;
import java.io.Serializable;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import javax.persistence.*;

@Entity
@Table(name="candidates")


public class Candidates implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)

	private long id;
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email_id")
	private String emailId;
	
	@Column(name="candidate_role")
	private String candidate_role;
	
	@Column(name="active")
	private Boolean  active;
	
	
	@Column(name="firstStartDate")
	private Date firstStartDate;
	
	@Column(name="secondLanguageLevel")
		private String secondLanguageLevel;
	
	@Column(name="dateOfBirth")
	public Date dateOfBirth;

    
    public Candidates() { 
    	
    }


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public String getCandidate_role() {
		return candidate_role;
	}


	public void setCandidate_role(String candidate_role) {
		this.candidate_role = candidate_role;
	}


	public Boolean getactive() {
		return active;
	}


	public void setactive(Boolean sActive) {
		sActive = sActive;
	}


	public Date getFirstStartDate() {
		return firstStartDate;
	}


	public void setFirstStartDate(Date firstStartDate) {
		this.firstStartDate = firstStartDate;
	}


	public String getSecondLanguageLevel() {
		return secondLanguageLevel;
	}


	public void setSecondLanguageLevel(String secondLanguageLevel) {
		this.secondLanguageLevel = secondLanguageLevel;
	}


	public Date getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public Candidates(long id, String firstName, String lastName, String emailId, String candidate_role,
			Boolean sActive, Date firstStartDate, String secondLanguageLevel, Date dateOfBirth) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.candidate_role = candidate_role;
		this.active = active;
		this.firstStartDate = firstStartDate;
		this.secondLanguageLevel = secondLanguageLevel;
		this.dateOfBirth = dateOfBirth;
	}
}
    
    
	