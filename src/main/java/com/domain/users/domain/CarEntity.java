package com.domain.users.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cars")
public class CarEntity {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String factory;
	private String name;
	private Integer power;
	private String type;
	
	public CarEntity() {
		// TODO Auto-generated constructor stub
	}

	
	public CarEntity(Integer id, String factory, String name, Integer power, String type) {
			this.id = id;		
			this.factory = factory;
			this.name = name;
			this.power = power;
			this.type = type;
	}
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
		return "CarEntity [id=" + id + ", factory=" + factory + ", name=" + name + ", power=" + power + ", type=" + type + "]";
	}

	

}
