package com.yelloware.app.model;
import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="roleregistration")


public class roleregistration implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	@Column(name="admin")
	private String admin; 
	
	@Column(name="Human Resources")
	private String humanResources; 
	
	@Column(name="Human Resources person")
	private String humanResourcesperson; 
	
	@Column(name="candidates")
	private String candidates; 
	@Column(name="project manager")
	private String projectmanager;

	public roleregistration() {

	}

	public long getId() {
		return id;
	}
	public roleregistration(long id, String admin, String humanResources, String humanResourcesperson,
			String candidates, String projectmanager) {
		super();
		this.id = id;
		this.admin = admin;
		this.humanResources = humanResources;
		this.humanResourcesperson = humanResourcesperson;
		this.candidates = candidates;
		this.projectmanager = projectmanager;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAdmin() {
		return admin;
	}
	public void setAdmin(String admin) {
		this.admin = admin;
	}
	public String getHumanResources() {
		return humanResources;
	}
	public void setHumanResources(String humanResources) {
		this.humanResources = humanResources;
	}
	public String getHumanResourcesperson() {
		return humanResourcesperson;
	}
	public void setHumanResourcesperson(String humanResourcesperson) {
		this.humanResourcesperson = humanResourcesperson;
	}
	public String getCandidates() {
		return candidates;
	}
	public void setCandidates(String candidates) {
		this.candidates = candidates;
	}
	public String getProjectmanager() {
		return projectmanager;
	}
	public void setProjectmanager(String projectmanager) {
		this.projectmanager = projectmanager;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	} 

	
	
	

}
