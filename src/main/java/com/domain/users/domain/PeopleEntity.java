package com.domain.users.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="people")
public class PeopleEntity {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id", nullable=false)
	private Integer idPeople;
	
	private String firstName;
	
	private String lastName;
	
	private Integer age;

	
	public PeopleEntity() {
		// TODO Auto-generated constructor stub
	}

	
	public PeopleEntity(Integer idPeople, String firstName, String lastName, Integer age) {
			this.idPeople = idPeople;		
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
	}
	
	
	public Integer getIdPeople() {
		return idPeople;
	}
	public void setIdPeople(Integer idPeople) {
		this.idPeople = idPeople;
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

	
	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "PeopleEntity [idPeople=" + idPeople + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + "]";
	}

	

	
	

}
