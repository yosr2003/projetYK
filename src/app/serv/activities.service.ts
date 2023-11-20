// activites.service.ts

import { Injectable } from '@angular/core';
import { Activite } from '../classes/activite';
import { Personne } from '../classes/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  URL = 'http://localhost:3000/activities/'
  
  constructor(private http:HttpClient){}

  activites: Activite[] = [
    new Activite("RotaKids", 10, new Date("2023-01-01"), new Date("2023-01-01"),'action sociale', 20, [new Personne('mohamed',563235)]),
    new Activite("sortie marsa", 20, new Date("2023-02-01"), new Date("2023-01-01"),'Sortie', 20, [new Personne('mohamed',563235)]),
    new Activite("collecte fourniture scolaire", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'collecte', 20, [new Personne('mohamed',563235)]),
    new Activite("non-violence", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'evenement', 20, [new Personne('mohamed',563235)]),
    new Activite("non-hvgi", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'evenement', 20, [new Personne('mohamed',563235)])
  ];

  listmembres:Personne[]=[
    new Personne('mohammd',7582),
    new Personne('asma',8888),
    new Personne('amira',453543),
    new Personne('salah',45544),
  ];
  getMembers(){
    return this.listmembres;
  }


  public addParticipant(nom:string,cin:number,index:number){
    this.activites[index].participants.push(new Personne(nom,cin));

  }



  categories:string[]=[];

    getcategories(){ 
    for(let i=0;i<this. activites.length;i++){
      if(!(this.categories.includes(this. activites[i].categorie))){
        this.categories.push(this. activites[i].categorie);
      }
    }
    return this.categories;
  
  }

  getActivite() {
    return this.activites;
  }

 

  public rechercherActiviteParDate(dateString: string):Observable<Activite[]> {
    return this.http.get<Activite[]>(URL+'?dateDebut='+dateString)
    // const dateRecherche = new Date(dateString);
    // return this.activites.filter(
    //   act => act.dateDebut.toISOString().includes(dateRecherche.toISOString())
    // );
  }
}
