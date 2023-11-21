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

  datecherche:string | undefined;
  lesactivites:Activite[]=[];
  lesCategories:string[]=[];
  activiteDetails: any;
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.activiteDetails = this.act.getActiviteById(id);
    this.lesactivites=this.act.getActivite();
    this.lesCategories=this.act.getcategories();
    
    this.act.getActiviteById(id).subscribe({
     next: (activite) => {
        this.activiteDetails = activite;
      }
      
  });


    this.act.rechercherActiviteParDate(this.datecherche!).subscribe({
      next:(data)=>{
        this.FilteredActivites = data
      }
    })  
 }
 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}


FilteredActivites!:Activite[];



// getFilteredActivites(): Activite[] {
//   return this.lesactivites.filter(activite => activite.dateDebut.toISOString() === this.datecherche?.toLowerCase());
// }
}
