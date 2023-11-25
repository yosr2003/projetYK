import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  isMenuOpen: boolean = false;
  categori!:string;
  Activite2!:Activite;
  // lesactivites:Activite[] = [];
  lesactivites2:Activite[] = [];
  
  
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    // this.categori=this.activatedRoute.snapshot.params['categorie'];
    // // this.lesactivites=this.act.getActivite();
    
    // this.act.getActivites().subscribe(
    //   data=>{
    //     this.lesactivites2=data
    //   }
    // )
    // this.act.getActiviteById(2).subscribe(
    //   data=>{
    //     this.Activite2=data
    //   }
    
    //  );
 
 }
 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}
