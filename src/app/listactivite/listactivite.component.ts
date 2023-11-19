import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../serv/activities.service';

@Component({
  selector: 'app-listactivite',
  templateUrl: './listactivite.component.html',
  styleUrls: ['./listactivite.component.css']
})
export class ListactiviteComponent {
  isMenuOpen: boolean = false;

  categorie:string|undefined;
  lesactivites:Activite[]=[];
  lesCategories:string[]=[];
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.categorie=this.activatedRoute.snapshot.params['categorie'];
    this.lesactivites=this.act.getActivite();
    this.lesCategories=this.act.getcategories();
 
 }
 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}
