import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'app-input-type-text',
  templateUrl: './input-type-text.component.html',
  styleUrls: ['./input-type-text.component.css']
})
export class InputTypeTextComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  
  registerOnChange(fn: any): void {
  }
}
