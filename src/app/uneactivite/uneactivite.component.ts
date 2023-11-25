import { Component, Input, OnInit } from '@angular/core';
import { Activite } from '../classes/activite';
import { Router } from '@angular/router';
import { ActivitiesService } from '../serv/activities.service';

@Component({
  selector: 'app-uneactivite',
  templateUrl: './uneactivite.component.html',
  styleUrls: ['./uneactivite.component.css']
})
export class UneactiviteComponent implements OnInit {
  disp!:boolean;
  myDate = new Date();
  constructor(private router:Router,private act:ActivitiesService){}
  ngOnInit(): void {
    // if(this.active.dateDebut>this.myDate){
    //   this.disp=false;
    //   this.act.patchProduit(this.active.id,{disponiblite:this.disp}).subscribe(
    //     data => this.active.disponiblite=this.disp
    //   )
    // }
    
  }

  @Input() active!:Activite;
  @Input() index!: number;
  Infos(identif: number) {
    this.router.navigate(['selectedActivity',identif]);
  } 
  
}
