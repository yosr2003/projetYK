import { Component, OnInit } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';

@Component({
  selector: 'app-searchdate',
  templateUrl: './searchdate.component.html',
  styleUrls: ['./searchdate.component.css']
})
export class SearchdateComponent implements OnInit {
  public lesActivites!: Activite[];
  AllActivites!: Activite[];
  public titreRecherche: string = '';
  public dateRecherche: string = '';

  constructor(private activiteService: ActivitiesService) { }

  ngOnInit(): void {
    this.lesActivites = this.activiteService.getActivite();
    this.AllActivites = this.activiteService.getActivite();
  }

 

  chercherParDate() {
    this.lesActivites = this.activiteService.rechercherActiviteParDate(this.dateRecherche);
    alert(JSON.stringify(this.lesActivites));
  }

}
