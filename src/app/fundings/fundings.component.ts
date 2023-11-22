import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../serv/activities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../classes/activite';

@Component({
  selector: 'app-fundings',
  templateUrl: './fundings.component.html',
  styleUrls: ['./fundings.component.css']
})
export class FundingsComponent implements OnInit {
  lesCategories:string[]=[];
  public dateRecherche: string = '';
  constructor(private act:ActivitiesService,private route:Router){}
  ngOnInit(): void {
    this.act.extraireCategorie().subscribe((categories) => {
      this.lesCategories=categories;
      
    });
 

  }



}
