import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../serv/activities.service';
import { Activite } from '../classes/activite';

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css']
})
export class FullstackComponent implements OnInit {
  lesactivites:Activite[]=[];
a: Activite|undefined;
constructor(private act:ActivitiesService){}
  ngOnInit(): void {
    // i: number;
  //  this.lesactivites=this.act.getActivite();
  }

}
