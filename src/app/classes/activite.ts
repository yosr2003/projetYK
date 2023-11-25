// activite.model.ts

import { Personne } from "./personne";

export class Activite {
    constructor(public id:number,public titre: string, public nbPart:number, public dateDebut: Date, public dateFin: Date, public categorie:string, public capacite:number, public participants: Personne[], public image1:string, public image2:string, public image3:string, public image4:string, public image5:string,public lieu:string,
      public disponiblite:boolean, public description:string ) {}
  }
  