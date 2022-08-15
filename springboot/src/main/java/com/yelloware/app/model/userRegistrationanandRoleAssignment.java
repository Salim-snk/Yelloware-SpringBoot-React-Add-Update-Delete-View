package com.yelloware.app.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="UserRegistrationanandRoleAssignment")



public class userRegistrationanandRoleAssignment  implements Serializable { /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)

	private long id;
	@Column(name="first_name")
	private String firstName;
	
	public userRegistrationanandRoleAssignment(long id, String firstName, String lastName, String emailId,
			String phoneId, String role, String password, Boolean isActive) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.phoneId = phoneId;
		this.role = role;
		this.password = password;
		ısActive = isActive;
	}

	public userRegistrationanandRoleAssignment() {

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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getIsActive() {
		return ısActive;
	}

	public void setIsActive(Boolean isActive) {
		ısActive = isActive;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email_id")
	private String emailId;
	
	@Column(name="phoneId")
	private String phoneId;
	
	
	
	@Column(name=" role")
	private String role;
	
	@Column(name=" password")
	private String password;
	
	@Column(name="IsActive")
	private Boolean  ısActive;

	
	}