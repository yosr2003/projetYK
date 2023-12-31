import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Personne } from '../classes/personne';
import { AdminService } from '../serv/admin.service';
import { Notif } from '../classes/notif';

@Component({
  selector: 'app-backoff',
  templateUrl: './backoff.component.html',
  styleUrls: ['./backoff.component.css']
})
export class BackoffComponent {
bell:boolean=false;
notifications:Notif[]=[];
AjoutAutres!: boolean;
afficheAutres() {
  if (this.AjoutAutres==true){
    this.AjoutAutres=false;
  }
  else{
    this.AjoutAutres=true;
  }
}
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

  searchshow:boolean=false;
  lesmembres!: Personne[];
  constructor(private ActService:ActivitiesService,private adminService:AdminService,private fb:FormBuilder,  private route: ActivatedRoute){}

ngOnInit(): void {
 this.ActService.getActivites().subscribe((data: Activite[])=>this.lesActivites=data);
 this.ActService.getMembers().subscribe((data: Personne[])=>this.lesmembres=data);
 this.ActService.getActivites().subscribe((data: Activite[])=>this.AllActivity=data);
 this.categories$ = this.ActService.getAllCategories();

 this.actForm=this.fb.nonNullable.group({
   id:[0,Validators.required],  titre:['',[Validators.required, Validators.pattern('^[a-zA-Z,\' .-]+$')]], nbPart:[0],
   dateDebut: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]],
   dateFin:['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]],
   categorie:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
   capacite:['',Validators.required],
   lieu:[''],
   description:[''],
   image1:[''],
   image2:[''],
   titre2:['']


    })

  /*notifs*/
  this.ActService.getNotifs().subscribe(
    data=>this.notifications=data
  )
   
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
  data => this.lesActivites.push(data),
  error => console.error('Erreur lors de l\'ajout d\'activité:', error)
  )
  }

  onSupprimer(id: number) {
    this.ActService.deleteActivite(id).subscribe({
      next: data => {
        // Filtrer lesActivites pour exclure l'élément avec l'ID correspondant
        this.lesActivites = this.lesActivites.filter(activite => activite.id !== id);
      },
      error: error => console.error('Erreur lors de la suppression d\'activité:', error)
    });
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
  public get capacity(){
    return this.actForm.get('capacite');
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

          activerEdition(activity: Activite, index: number) {
    this.isEditMode = true;
    this.editedActivityIndex = index;
    this.actForm.patchValue(activity);
  }
          editedActivity: Activite | undefined;
          sauvegarderEdition() {
            if (this.editedActivityIndex !== undefined) {
              // Mettez à jour l'activité avec les nouvelles valeurs du formulaire
              this.lesActivites[this.editedActivityIndex] = { ...this.actForm.value };
          
              // Appelez votre service pour mettre à jour sur le serveur
              this.ActService.UpdateActivity(this.actForm.value as Activite).subscribe({
                next: (response) => {
                  this.lesActivites.push(response),
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
              // this.show=!this.show;
              this.ActService.rechercherActiviteParTitre(v).subscribe({
                next:(data)=>{
                  console.log({"date_result":data});
                  this.lesActivites = data
                }
              })
            
}

afficherSearch() {
  if (this.searchshow==true){
    this.searchshow=false;
  }
  else{
    this.searchshow=true;
  }
  }


  logout(){
    alert("deconnexion");
    this.adminService.logout();
  }

  togglenotif(){
    this.bell=!this.bell;
  }

}
            // ...
        
           
          

            
            
            
          
          
          


          

