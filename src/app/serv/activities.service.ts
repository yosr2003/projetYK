// activites.service.ts

import { Injectable } from '@angular/core';
import { Activite } from '../classes/activite';
import { Personne } from '../classes/personne';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  URL = 'http://localhost:3000/activities/'
  
  constructor(private http:HttpClient){}

  activites: Activite[] = [
    new Activite(1,"Action 'RotaKids'", 10, new Date("2023-01-01"), new Date("2023-01-01"),'action sociale', 20, [new Personne('mohamed',563235)],"assets/images/rotakidspeiture.jpg","assets/images/rotakidsjouerenfants.jpg","","",""),
    new Activite(2,"journée a la  marsa", 20, new Date("2023-02-01"), new Date("2023-01-01"),'Sortie', 20, [new Personne('mohamed',563235)],"assets/images/sortie.jpg","assets/images/sortie2.jpg","","",""),
    new Activite(3,"collecte fourniture scolaire", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'collecte', 20, [new Personne('mohamed',563235)],"assets/images/appel.jpg","assets/images/listecollecte.jpg","","",""),
    new Activite(4,"Event 'Rac-meziena'", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'evenement', 20, [new Personne('mohamed',563235)],"assets/images/rakmezienaffiche.jpg","assets/images/rakmezienalogo.jpg","","",""),
    new Activite(5,"Event 'non-violence' ", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'evenement', 20, [new Personne('mohamed',563235)],"assets/images/logononviolence.jpg","assets/images/rakmezienaffiche.jpg","","",""),

    
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

 

//  public rechercherActiviteParDate(dateString: string): Observable<Activite[]> {
//   // Use encodeURIComponent to handle special characters in the date string
//   const encodedDateString = encodeURIComponent(dateString);
//   return this.http.get<Activite[]>(this.URL + '?dateDebut=' + encodedDateString);
//   // If you also want to filter activities in-memory, uncomment the code below
//   // const dateRecherche = new Date(dateString);
//   // return this.activites.filter(
//   //   act => act.dateDebut.toISOString().includes(dateRecherche.toISOString())
//   // );
// }


public rechercherActiviteParDate(dateString: string): Observable<Activite[]> {
  const dateRecherche = new Date(dateString);


  const filteredActivities = this.activites.filter(
    act => act.dateDebut.toISOString().includes(dateRecherche.toISOString())
  );

 
  return of(filteredActivities);
}

public getActiviteById(id: number): Observable<Activite | undefined> {
  const url = `${this.URL}/${id}`;

  return this.http.get<Activite>(url);
}

}

