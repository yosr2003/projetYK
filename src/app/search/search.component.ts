import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../serv/activities.service';
import { Activite } from '../classes/activite';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public lesActivites!: Activite[];
  AllActivites!: Activite[];

  constructor(private activiteService: ActivitiesService) { }

  ngOnInit(): void {
    this.lesActivites = this.activiteService.getActivite();
    this.AllActivites = this.activiteService.getActivite();
  }

  chercher(titre: string) {
    console.log(titre);
    this.lesActivites = this.AllActivites.filter(act => act.titre.toLowerCase().includes(titre.toLowerCase()));
    alert(JSON.stringify(this.lesActivites));
  }
  
}
