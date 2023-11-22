import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../serv/activities.service';
import { ActivatedRoute } from '@angular/router';
import { Activite } from '../classes/activite';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent implements OnInit{
  cat:string="";
  isMenuOpen: boolean = false;
  lesact:Activite[]=[];
  constructor(private act:ActivitiesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.cat= this.activatedRoute.snapshot.params['categorie'];
    this.act.rechercherActiviteParCategorie(this.cat).subscribe(
      data=>{
        this.lesact=data
      }
    )
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
