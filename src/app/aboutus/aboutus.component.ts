import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../serv/activities.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  isMenuOpen: boolean = false;
  categori!:string;
  lesactivites:Activite[] = [];
  lesCategories:string[] = [];
  
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.categori=this.activatedRoute.snapshot.params['categorie'];
    this.lesactivites=this.act.getActivite();
    this.lesCategories=this.act.getcategories();
 
 }
 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}
