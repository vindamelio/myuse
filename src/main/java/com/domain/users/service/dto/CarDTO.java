package com.domain.users.service.dto;

public class CarDTO {

	private Integer idCar;
	private String factory;
	private String name;
	private Integer power;
	private String type;
	
	public CarDTO() {
		// TODO Auto-generated constructor stub
	}

	
	public CarDTO(Integer idCar, String factory, String name, Integer power, String type) {
			this.idCar = idCar;		
			this.factory = factory;
			this.name = name;
			this.power = power;
			this.type = type;
	}
	
	
	public Integer getIdCar() {
		return idCar;
	}

	public void setIdCar(Integer idCar) {
		this.idCar = idCar;
	}

	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public Integer getPower() {
		return power;
	}
	public void setPower(Integer power) {
		this.power = power;
	}

	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "CarDTO [idCar=" + idCar + ", factory=" + factory + ", name=" + name + ", power=" + power + ", type=" + type + "]";
	}

	


}
