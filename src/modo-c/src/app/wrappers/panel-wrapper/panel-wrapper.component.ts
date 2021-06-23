import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
@Component({
  selector: 'app-panel-wrapper',
  templateUrl: './panel-wrapper.component.html',
  styleUrls: ['./panel-wrapper.component.css']
})
export class PanelWrapperComponent extends FieldWrapper implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
