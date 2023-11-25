import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backoff',
  templateUrl: './backoff.component.html',
  styleUrls: ['./backoff.component.css']
})
export class BackoffComponent {
 filteredActivites: Activite[] = [];
 titreRecherche: string = '';

  // chercherParTitre(): void {
  //   this.titreRecherche = this.actForm.get('titre')?.value;

  //   if (this.titreRecherche) {
  //     this.filteredActivites = this.AllActivity.filter(
  //       (activite) => activite.titre.includes(this.titreRecherche)
  //     );
  //   } else {
  //     this.filteredActivites = this.AllActivity;
  //   }
  // }





  lesActivites:Activite[]=[];
  AllActivity:Activite[]=[];

  visible: boolean = false;
  categories: string[]=[];
  categories$: Observable<string[]> | undefined;
  isEditMode = true;
  editedActivityIndex: any;
detailIndex: any;
  show: boolean=false;
  constructor(private ActService:ActivitiesService,private fb:FormBuilder,  private route: ActivatedRoute){}

ngOnInit(): void {
 this.ActService.getActivites().subscribe((data: Activite[])=>this.lesActivites=data);
 this.ActService.getActivites().subscribe((data: Activite[])=>this.AllActivity=data);
 this.categories$ = this.ActService.getAllCategories();

 this.actForm=this.fb.nonNullable.group({
   id:[0,Validators.required],  titre:['',[Validators.required, Validators.pattern('^[a-zA-Z,\' .-]+$')]], nbPart:[0],
   dateDebut: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]],
   dateFin:['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]],
   categorie:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
   capacite:[''],
   lieu:[''],
   description:[''],
   image1:[''],
   image2:[''],
   titre2:['']


    })


   
  }


detail:boolean=false;
actForm!: FormGroup;
afficher() {
if (this.visible==true){
  this.visible=false;
}
else{
  this.visible=true;
}
}

  afficher2(i: number) {
    this.detailIndex = i;
    this.detail = !this.detail;
  }
  
Ajouter() {
 
  this.ActService.addActivite(this.actForm.value as Activite).subscribe(
  data => console.log(data),
  error => console.error('Erreur lors de l\'ajout d\'activité:', error)
  )
  }

  onSupprimer(id:number){
    this.ActService.deleteActivite(id).subscribe();
    }

   
  public onActiviteChange(event: any) {
    const categorie = event.target.value;
    console.log(categorie);
    
    if (categorie == 'all') {
      this.lesActivites = this.AllActivity;
    } else {
      this.lesActivites = this.AllActivity.filter(Activite => Activite.categorie == categorie);
    }
  }

  public get idActivity(){
    return this.actForm.get('id');
  }
  public get TitreActivity(){
    return this.actForm.get('titre');
  }
  public get CategorieActivity(){
    return this.actForm.get('categorie');
  }
  isValidPattern() {
    return this.TitreActivity?.errors?.['pattern']&& this.TitreActivity?.dirty;
    }
    isValidPatternCategorie() {
      return this.CategorieActivity?.errors?.['pattern']&& this.CategorieActivity?.dirty;
      }
      public get dateDebut(){
        return this.actForm.get('dateDebut');
      }
      public get dateFin(){
        return this.actForm.get('dateFin');
      }
      isValidPatternDateDebut() {
        return this.dateDebut?.errors?.['pattern']&& this.dateDebut?.dirty;
        }
        isValidPatternDateFin() {
          return this.dateFin?.errors?.['pattern']&& this.dateFin?.dirty;
          }

          activerEdition(activity: Activite,index:number) {
            this.isEditMode = true;
          
            this.editedActivityIndex = index;
        
            // Pré-remplir le formulaire avec les valeurs existantes
            this.actForm.setValue({
              id: activity.id,
              titre: activity.titre,
              nbPart: activity.nbPart,
              dateDebut: activity.dateDebut,
              dateFin: activity.dateFin,
              categorie: activity.categorie,
              lieu: activity.lieu,
              capacite: activity.capacite,
              disponiblite: activity.disponiblite,
              description: activity.description,
              image1: activity.image1,
              image2: activity.image2,
            });
           
          }
          editedActivity: Activite | undefined;
          sauvegarderEdition() {
            if (this.editedActivityIndex !== undefined) {
              // Mettez à jour l'activité avec les nouvelles valeurs du formulaire
              this.lesActivites[this.editedActivityIndex] = { ...this.actForm.value };
          
              // Appelez votre service pour mettre à jour sur le serveur
              this.ActService.UpdateActivity(this.actForm.value as Activite).subscribe({
                next: (response) => {
                  console.log('Modification réussie');
                  this.isEditMode = false;
                  // this.editedActivity = null;
                },
                error: (error) => {
                  console.error('Erreur lors de la modification de l\'activité:', error);
                  // Add additional error handling or notifications as needed
                },
              });
            }}
           
            chercherpartitre(v:string) {
              this.show=!this.show;
              this.ActService.rechercherActiviteParTitre(v).subscribe({
                next:(data)=>{
                  console.log({"date_result":data});
                  this.lesActivites = data
                }
              })
            
}}
            // ...
        
           
          

            
            
            
          
          
          


          

