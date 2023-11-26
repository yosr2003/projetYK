import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaiComponent } from './essai/essai.component';
import { ErreurComponent } from './erreur/erreur.component';
import { FundingsComponent } from './fundings/fundings.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { ListactiviteComponent } from './listactivite/listactivite.component';
import { FilterbytitleComponent } from './filterbytitle/filterbytitle.component';
import { FilterbydateComponent } from './filterbydate/filterbydate.component';
import { ModifMdpComponent } from './modif-mdp/modif-mdp.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { LkolComponent } from './lkol/lkol.component';
import { authentificationGuard } from './authentification.guard';
import { AuthentificationComponent } from './authentification/authentification.component';
import { BackoffComponent } from './backoff/backoff.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SelectedactivityComponent } from './selectedactivity/selectedactivity.component';
import { ProfilComponent } from './profil/profil.component';
import { ApiComponent } from './api/api.component';



const routes: Routes = [
  {path:'',title:'',component:Accueil2Component,
  children:[
    {path:'essai/:categorie',title:'essai',component:EssaiComponent}, 
    {
      path: 'activities/:id',title: 'activities',component: FilterbydateComponent,
    },
    {path:'activities/:categorie',title:'Activities',component:ListcategoriesComponent},
    {path:'recherche/:type/:elmnt',title:'',component:LkolComponent},
    // {path:'activities/:categorie',title:'Activities',component:ListcategoriesComponent},
    // {path:'accueil',title:'accueil',component:FundingsComponent}, 
    // { path: 'activities/filterbydate/:datecherche', title: 'activities', component: FilterbydateComponent },
    // {path:'fullstack',title:'fulls',component:FullstackComponent},
    {path:'home',title:'home',component:FundingsComponent },
    {path:'aboutus',title:'aboutus',component:AboutusComponent },
    {path:'login',title:'login',component:AuthentificationComponent },
    {path:'profil',title:'profil',component:ProfilComponent },
    {path:'api',title:'api',component:ApiComponent},
    {path:'backoff',title:'backoff',component:BackoffComponent  ,canActivate:[authentificationGuard]},
    {path:'selectedActivity/:identif', title:'selectedActiv', component:SelectedactivityComponent},
    // {path:'activities/:categorie',title:'activities',component:ListactiviteComponent},
    // {path:'activities/:titre',title:'activities',component:FilterbytitleComponent},
   
    // {path:'activities',title:'activities',component:ListactiviteComponent},
   
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',title:'erreur',component:ErreurComponent},

  ]},
  
  
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**',title:'erreur',component:ErreurComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
