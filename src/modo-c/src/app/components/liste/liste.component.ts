import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input('parentListe') public importedUserListe:User[]=[];
  @Output() public childListe = new EventEmitter();

  public error: string = "";
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    localStorage.setItem("importedUserListe",JSON.stringify(this.importedUserListe));
  }

  public fireChildList(){
    this.childListe.emit("Liste Saluta");
  }

  public navigate(id:number){
    this.router.navigate(["/adde", id]);
  }

}
