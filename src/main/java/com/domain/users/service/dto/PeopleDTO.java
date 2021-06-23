package com.domain.users.service.dto;

public class PeopleDTO {

	private Integer idPeople;
	
	private String firstName;
	
	private String lastName;
	
	private Integer age;

	
	public PeopleDTO() {
		// TODO Auto-generated constructor stub
	}

	
	public PeopleDTO(Integer idPeople, String firstName, String lastName, Integer age) {
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
		return "PeopleDTO [idPeople=" + idPeople + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + "]";
	}

}
