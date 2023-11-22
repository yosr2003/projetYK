import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../serv/activities.service';

@Component({
  selector: 'app-filterbydate',
  templateUrl: './filterbydate.component.html',
  styleUrls: ['./filterbydate.component.css']
})
export class FilterbydateComponent {
 
  isMenuOpen: boolean = false;
  // idActivite:number|undefined;
  
  // lesactivites:Activite[]=[];
  
  Activite2!:Activite;
  activiteDetails: any;
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    // this.idActivite=this.activatedRoute.snapshot.params['id'];
    // this.act.getActivites().subscribe(
    //   data=>{
    //     this.lesactivites=data
    //   }
    // )

    this.act.getActiviteById(id).subscribe(
      data=>{
        this.Activite2=data
      }
    
     );
 }
 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}
