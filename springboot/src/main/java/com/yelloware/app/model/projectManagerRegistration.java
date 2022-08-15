package com.yelloware.app.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="projectManagerRegistration")



public class projectManagerRegistration   implements Serializable { /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	
	private long id;
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email_id")
	private String emailId;
	
	@Column(name=" phoneId")
	private String phoneId;

	public projectManagerRegistration() {

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

	public String getPhoneId() {
		return phoneId;
	}

	public void setPhoneId(String phoneId) {
		this.phoneId = phoneId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public projectManagerRegistration(long id, String firstName, String lastName, String emailId, String phoneId) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.phoneId = phoneId;
	}



}
