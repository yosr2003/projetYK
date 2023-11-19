// activite.model.ts

import { Personne } from "./personne";

export class Activite {
    constructor(public titre: string, public nbPart:number, public dateDebut: Date, public dateFin: Date, public categorie:string, public capacite:number, public participants: Personne[]) {}
  }
  