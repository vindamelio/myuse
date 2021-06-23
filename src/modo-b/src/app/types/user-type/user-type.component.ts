import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})

export class UserTypeComponent extends FieldArrayType implements OnInit {

  idUser: FormlyFieldConfig;
  account: FormlyFieldConfig;
  mail: FormlyFieldConfig;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
