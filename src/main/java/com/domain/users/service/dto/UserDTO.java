package com.domain.users.service.dto;

public class UserDTO {

	private Integer idUser;
	
	private String account;
	
	private String mail;

	
	public UserDTO() {
		// TODO Auto-generated constructor stub
	}

	
	public UserDTO(Integer idUser, String account, String mail) {
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
		return "UserDTO [idUser=" + idUser + ", account=" + account + ", mail=" + mail + "]";
	}

	

}
