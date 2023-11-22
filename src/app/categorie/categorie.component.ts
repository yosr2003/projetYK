import { Component, Input } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  type:string="categorie";
  // type2:string="dateDebut";
  // date:string="2023-02-01";
  lesActivites:Activite[]=[];
  @Input()cat:string | undefined;
  constructor(private act:ActivitiesService,private route:Router){}
  ngOnInit(): void {

    this.act.getActivites().subscribe(
      data=>{
        this.lesActivites=data
      }
    )
}
}
