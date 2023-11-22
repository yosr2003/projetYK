import { Component, OnInit } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchdate',
  templateUrl: './searchdate.component.html',
  styleUrls: ['./searchdate.component.css']
})
export class SearchdateComponent implements OnInit {
  lesActivites!: Activite[];
  type2:string="dateDebut";
  // AllActivites!: Activite[];
  public titreRecherche: string = '';
  public dateRecherche: string = '';
  public dateDebut:string='';

  constructor(private activiteService: ActivitiesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activiteService.getActivites().subscribe(
      data=>{
        this.lesActivites=data
      }
    )
    // this.lesActivites = this.activiteService.getActivite();
    // this.AllActivites = this.activiteService.getActivite();
    this.titreRecherche=this.activatedRoute.snapshot.params['titre'];
    this.dateDebut=this.activatedRoute.snapshot.params['datecherche'];
  }
  show:boolean=true;
 

  chercherParDate() {
    this.show=!this.show;
    this.activiteService.rechercherActiviteParDate2(this.dateRecherche).subscribe({
      next:(data)=>{
        console.log({"date_result":data});
        this.lesActivites = data
      }
    })
    // alert(JSON.stringify(this.lesActivites));
  }





  

}
