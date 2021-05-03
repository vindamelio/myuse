import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-listc',
  templateUrl: './listc.component.html',
  styleUrls: ['./listc.component.css']
})
export class ListcComponent implements OnInit {

  @Input('parentListc') public importedUserListc:User[]=[];
  @Output() public childListc = new EventEmitter();

  public error: string = "";
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    localStorage.setItem("importedUserListc",JSON.stringify(this.importedUserListc));
  }

  public fireChildList(){
    this.childListc.emit("Listc Saluta");
  }

  public navigate(id:number){
    this.router.navigate(["/addc", id]);
  }

}
