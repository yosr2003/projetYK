import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filterbytitle',
  templateUrl: './filterbytitle.component.html',
  styleUrls: ['./filterbytitle.component.css']
})
export class FilterbytitleComponent {
  isMenuOpen: boolean = false;

  title:string|undefined;
  lesactivites:Activite[]=[];
  lesCategories:string[]=[];
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['titre'];
    // this.lesactivites=this.act.getActivite();
    // this.lesCategories=this.act.getcategories();
 
 }
 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

getFilteredActivites(): Activite[] {
  return this.lesactivites.filter(activite => activite.titre === this.title);
}
}
