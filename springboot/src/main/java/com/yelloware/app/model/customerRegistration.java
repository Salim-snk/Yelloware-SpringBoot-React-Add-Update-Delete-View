package com.yelloware.app.model;


import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="CustomerRegistration")



public class customerRegistration  implements Serializable { /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	
	private long id;
	@Column(name="	customer name ")
	private String customername;
	
	@Column(name="	website  ")
	private String website;
	
	@Column(name="	address  ")
	private String address;

	public customerRegistration() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCustomername() {
		return customername;
	}

	public void setCustomername(String customername) {
		this.customername = customername;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public customerRegistration(long id, String customername, String website, String address) {
		super();
		this.id = id;
		this.customername = customername;
		this.website = website;
		this.address = address;
	}
	
	

	
	

}
