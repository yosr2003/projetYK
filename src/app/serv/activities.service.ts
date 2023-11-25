// activites.service.ts

import { Injectable } from '@angular/core';
import { Activite } from '../classes/activite';
import { Personne } from '../classes/personne';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
const URL='http://localhost:3000/activites';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  // URL = 'http://localhost:3000/activities/'
  
  constructor(private http:HttpClient){}
  getActivites():Observable<Activite[]>{
    return this.http.get<Activite[]>(URL);
  }
  
  getActiviteById(id: number): Observable<Activite> {
    return this.http.get<Activite>(`${URL}/${id}`);
  }
  
  extraireCategorie(): Observable<string[]> {
    return this.getActivites().pipe(
      map((activites) => {
        const categoriesSet = new Set<string>();
        activites.forEach((activite) => {
          categoriesSet.add(activite.categorie);
        });
        return Array.from(categoriesSet);
      })
    );
  
  }
  rechercherActiviteParDate2(dateString: string): Observable<Activite[]> {
    const dateRecherche = new Date(dateString);
  
    return this.http.get<Activite[]>(URL).pipe(
      map((activites) =>
        activites.filter(
          (act) => new Date(act.dateDebut).toISOString().includes(dateRecherche.toISOString())
        )
      )
    );
  }
  rechercherActiviteParCategorie(categorie: string): Observable<Activite[]> {
    return this.http.get<Activite[]>(URL).pipe(
      map((activites) => activites.filter((act) => act.categorie === categorie))
    );
  }

  // activites: Activite[] = [
  //   new Activite(1,"Action 'RotaKids'", 10, new Date("2023-01-01"), new Date("2023-01-01"),'action sociale', 20, [new Personne('mohamed',563235)],"assets/images/rotakidspeiture.jpg","assets/images/rotakidsjouerenfants.jpg","","",""),
  //   new Activite(2,"journée a la  marsa", 20, new Date("2023-02-01"), new Date("2023-01-01"),'Sortie', 20, [new Personne('mohamed',563235)],"assets/images/sortie.jpg","assets/images/sortie2.jpg","","",""),
  //   new Activite(3,"collecte fourniture scolaire", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'collecte', 20, [new Personne('mohamed',563235)],"assets/images/appel.jpg","assets/images/listecollecte.jpg","","",""),
  //   new Activite(4,"Event 'Rac-meziena'", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'evenement', 20, [new Personne('mohamed',563235)],"assets/images/rakmezienaffiche.jpg","assets/images/rakmezienalogo.jpg","","",""),
  //   new Activite(5,"Event 'non-violence' ", 13, new Date("2023-03-01"), new Date("2023-01-01"), 'evenement', 20, [new Personne('mohamed',563235)],"assets/images/logononviolence.jpg","assets/images/rakmezienaffiche.jpg","","",""),
    

    
  // ];

  // listmembres:Personne[]=[
  //   new Personne('mohammd',7582),
  //   new Personne('asma',8888),
  //   new Personne('amira',453543),
  //   new Personne('salah',45544),
  // ];
  // getMembers(){
  //   return this.listmembres;
  // }


  // public addParticipant(nom:string,cin:number,index:number){
  //   this.activites[index].participants.push(new Personne(nom,cin));

  // }



  categories:string[]=[];

  //   getcategories(){ 
  //   for(let i=0;i<this. activites.length;i++){
  //     if(!(this.categories.includes(this. activites[i].categorie))){
  //       this.categories.push(this. activites[i].categorie);
  //     }
  //   }
  //   return this.categories;
  
  // }

  // getActivite() {
  //   return this.activites;
  // }


 
  deleteActivite(id:number){
    return this.http.delete(URL+"/"+ id);
    }
  
 
  
    addActivite(A:Activite):Observable<Activite>{
      return this.http.post<Activite>(URL, A);
      }

 
      public getAllCategories(): Observable<string[]> {
        // Utilisez la méthode getActivites en tant qu'observable et utilisez l'opérateur map de RxJS
        return this.getActivites().pipe(
          map((activites: Activite[]) => {
            // Utilisez le spread operator pour obtenir toutes les catégories uniques
            return [...new Set(activites.map((act) => act.categorie))];
          })
        );
      }
    
      UpdateActivity(activite: Activite): Observable<any> {
        const url = `${URL}/${activite.id}`;
        return this.http.put(url, activite);
      }
      rechercherActiviteParTitre(titreRecherche: string): Observable<Activite[]> {
        return this.http.get<Activite[]>(URL).pipe(
          map((activites) =>
            activites.filter(
              (act) => act.titre.toLowerCase().includes(titreRecherche.toLowerCase())
            )
          )
        );}

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


// public rechercherActiviteParDate(dateString: string): Observable<Activite[]> {
//   const dateRecherche = new Date(dateString);


//   const filteredActivities = this.activites.filter(
//     act => act.dateDebut.toISOString().includes(dateRecherche.toISOString())
//   );

 
//   return of(filteredActivities);
// }




}

