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
  constructor(private router:Router,private act:ActivitiesService){}
  ngOnInit(): void {
    
  //   this.act.patchProduit(this.id,{disponiblite:disp}).subscribe(
  //   data => this.Activite2.disponiblite=! this.Activite2.disponiblite
  // )
  }

  @Input() active!:Activite;
  @Input() index!: number;
  Infos(identif: number) {
    this.router.navigate(['selectedActivity',identif]);
  } 
  
}
