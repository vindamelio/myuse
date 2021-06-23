package com.domain.users.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class UserEntity {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id", nullable=false)
	private Integer idUser;
	
	private String account;
	
	private String mail;

	
	public UserEntity() {
		// TODO Auto-generated constructor stub
	}

	
	public UserEntity(Integer idUser, String account, String mail) {
			this.idUser = idUser;		
			this.account = account;
			this.mail = mail;
	}
	
	
	public Integer getIdUser() {
		return idUser;
	}
	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}

	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}


	@Override
	public String toString() {
		return "UserEntity [idUser=" + idUser + ", account=" + account + ", mail=" + mail + "]";
	}

	
	

}
