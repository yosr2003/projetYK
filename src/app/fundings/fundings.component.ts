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
  public lesActivites!: Activite[];
  lesa:string[]=[];
  show:boolean=true;
  public dateRecherche: string = '';
  constructor(private act:ActivitiesService,private route:Router){}
  ngOnInit(): void {
    this.lesCategories=this.act.getcategories();
    this.lesActivites=this.act.getActivite();

  }
  // chercherpardate(){
// this.route.navigate(['/activities']);  
// this.show=!this.show;
// alert('bvcxw');
// this.lesActivites = this.act.rechercherActiviteParDate(this.dateRecherche);alert(JSON.stringify(this.lesActivites));
//   }


}
