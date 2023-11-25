import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';

@Component({
  selector: 'app-selectedactivity',
  templateUrl: './selectedactivity.component.html',
  styleUrls: ['./selectedactivity.component.css']
})
export class SelectedactivityComponent implements OnInit {
   id:any;
   public activity!: Activite | undefined;
   constructor(private actServ:ActivitiesService,private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
   this.id=this.activatedRoute.snapshot.params['identif'];
   this.actServ.getActiviteById(this.id).subscribe((activite: Activite) => {
    this.activity = activite;
});
  }



}
