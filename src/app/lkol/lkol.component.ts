import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../serv/activities.service';
import { Activite } from '../classes/activite';

@Component({
  selector: 'app-lkol',
  templateUrl: './lkol.component.html',
  styleUrls: ['./lkol.component.css']
})
export class LkolComponent implements OnInit {
  isMenuOpen: boolean = false;
  elmnt:string="";
  type:string="";
  lesact:Activite[]=[];
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.type=this.activatedRoute.snapshot.params['type'];
    this.elmnt=this.activatedRoute.snapshot.params['elmnt'];
    if(this.type=="categorie"){
      this.act.rechercherActiviteParCategorie(this.elmnt).subscribe(
        data=>{
          this.lesact=data
        }
      )
    }
    else if(this.type=="dateDebut"){
      this.act.rechercherActiviteParDate2(this.elmnt).subscribe(
        data=>{
          this.lesact=data
        }
      )
    }
    
    
  }
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
