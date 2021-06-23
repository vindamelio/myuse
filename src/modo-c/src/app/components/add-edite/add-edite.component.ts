import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormlyJsonschema} from '@ngx-formly/core/json-schema';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserProviderService } from '../../services/user-provider.service';
import { User } from '../../models/user';

import { from, of, Observable } from 'rxjs';
import { Select, Store } from "@ngxs/store";

import { StatoModule } from '../../modules/stato/stato.module';

import { UserStatoModel, BozzaUserStatoModel, BozzaUserStatoModelRequest } from '../../modules/stato/stato-model.module';
import { GetUsers, GetUser, CreateUser, UpdateUser, DeleteUser } from '../../modules/stato/stato-action.module';


@Component({
  selector: 'app-add-edite',
  templateUrl: './add-edite.component.html',
  styleUrls: ['./add-edite.component.css']
})
export class AddEditeComponent implements OnInit {
  @Input('parentUsere') public importedUsere:User = new User("","");
  @Output() public childUsere = new EventEmitter();

  public sendingUsere:User=new User("","");
  public error: string = "";
  public msg: String = "";

  public stringe: String = "";

  //dfavoriteColorControlId = new FormControl('');
  //dfavoriteColorControlAccount = new FormControl('');
  //dfavoriteColorControlMail = new FormControl('');

  //newItemForm: FormGroup;                 //???
  isShowNewItemForm: boolean = false;

  myForm = new FormGroup({});
  myModel = { 
    eid: 0,
    eAccount: '',
    eMail: '' 
  
  };
  myFields: FormlyFieldConfig[] | undefined= [];

  constructor(
    private store: Store,
    private route: ActivatedRoute, 
    private router:Router,
    private userProviderService:UserProviderService,
    private http:HttpClient,
    private formlyJsonSchema: FormlyJsonschema
  ) { }

  ngOnInit(): void {
    //this.http.get<FormlyFieldConfig[]>('/assets/jsonSchemo.json').subscribe(fields=>{this.myFields=fields});
    //this.http.get<FormlyFieldConfig[]>('/assets/jsonScheme.json').subscribe(jsonSchema=>{
    this.http.get<any>('/assets/jsonScheme.json').subscribe(jsonSchema=>{
      const formlyConfig = this.formlyJsonSchema.toFieldConfig(jsonSchema);
      console.log(formlyConfig);
      this.myFields=formlyConfig.fieldGroup
    });

    localStorage.setItem("importedUsere",JSON.stringify(this.importedUsere));
    this.stringe = this.importedUsere.id + ":" + this.importedUsere.account + ":" + this.importedUsere.mail ;
    //this.dfavoriteColorControlId.setValue(this.importedUserd.id)
    //this.dfavoriteColorControlAccount.setValue(this.importedUserd.account)
    //this.dfavoriteColorControlMail.setValue(this.importedUserd.mail)
  }


  onSubmit() {
    this.store.dispatch(new CreateUser(this.myForm.value)); //??
    this.isShowNewItemForm = !this.isShowNewItemForm;
    console.log(this.myModel);
  }

  showNewItemForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  cancelForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  public fireChildUser(){
    this.childUsere.emit("User " + this.importedUsere.account + " Saluta");
  }

  public sendData5(){
    
    //this.formModel.id = this.importedUser.id;
    //this.userProviderService.createUser(this.importedUsere).subscribe(data => this.sendingUser=data, error => this.error=error);
    //console.log("sendingUser: id:" + this.sendingUser.id + ", account:" + this.sendingUser.account + ", mail:" + this.sendingUser.mail);
    //this.store.dispatch(new CreateUser(this.newItemForm.value));



    this.store.dispatch(new CreateUser(this.importedUsere));
    this.isShowNewItemForm = !this.isShowNewItemForm;
    this.router.navigate(["/home"]);
  }

  

  public resetData5(){
    //this.newItemForm.reset();
    this.myForm.reset();
  }

  

  public deleteData(){
    //this.userProviderService.deleteUser(this.importedUsere.id).subscribe(data => this.msg=data, error => this.error=error);

    this.store.dispatch(new DeleteUser(this.importedUsere.id));
    this.router.navigate(["/home"]);
  }

  public updateValue(){
    this.myModel.eid = this.importedUsere.id
    this.myModel.eAccount = this.importedUsere.account.toString()
    this.myModel.eMail = this.importedUsere.mail.toString()
  }

  public printUser(){
    
    console.log("importedUser: id:" + this.importedUsere.id + ", account:" + this.importedUsere.account + ", mail:" + this.importedUsere.mail);
    console.log("sendingUsere: id:" + this.sendingUsere.id + ", account:" + this.sendingUsere.account + ", mail:" + this.sendingUsere.mail);
 
  }

  
}
