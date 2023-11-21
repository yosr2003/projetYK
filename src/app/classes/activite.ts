// activite.model.ts

import { Personne } from "./personne";

export class Activite {
    constructor(public id:number,public titre: string, public nbPart:number, public dateDebut: Date, public dateFin: Date, public categorie:string, public capacite:number, public participants: Personne[], public img1:string, public img2:string, public img3:string, public img4:string, public img5:string) {}
  }
  