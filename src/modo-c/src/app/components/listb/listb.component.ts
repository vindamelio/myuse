import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-listb',
  templateUrl: './listb.component.html',
  styleUrls: ['./listb.component.css']
})




export class ListbComponent implements OnInit {

  @Input('parentListb') public importedUserListb:User[]=[];
  @Output() public childListb = new EventEmitter();

  public error: string = "";
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    localStorage.setItem("importedUserListb",JSON.stringify(this.importedUserListb));
  }

  public fireChildList(){
    this.childListb.emit("Listb Saluta");
  }

  public navigate(id:number){
    this.router.navigate(["/addb", id]);
  }

}
