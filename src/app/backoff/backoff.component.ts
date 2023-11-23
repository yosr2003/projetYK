import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backoff',
  templateUrl: './backoff.component.html',
  styleUrls: ['./backoff.component.css']
})
export class BackoffComponent {
  lesActivites:Activite[]=[];

visible: any;

  constructor(private ActService:ActivitiesService,private router:Router){}

ngOnInit(): void {
 this.ActService.getActivites().subscribe((data: Activite[])=>this.lesActivites=data);
}
}
