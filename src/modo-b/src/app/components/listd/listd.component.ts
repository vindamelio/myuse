import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-listd',
  templateUrl: './listd.component.html',
  styleUrls: ['./listd.component.css']
})
export class ListdComponent implements OnInit {

  @Input('parentListd') public importedUserListd:User[]=[];
  @Output() public childListd = new EventEmitter();

  public error: string = "";
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    localStorage.setItem("importedUserListd",JSON.stringify(this.importedUserListd));
  }

  public fireChildList(){
    this.childListd.emit("Listd Saluta");
  }

  public navigate(id:number){
    this.router.navigate(["/addd", id]);
  }

}
