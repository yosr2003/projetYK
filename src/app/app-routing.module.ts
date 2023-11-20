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



const routes: Routes = [
  {path:'',title:'',component:Accueil2Component,
  children:[
    {path:'essai',title:'essai',component:EssaiComponent},
    {path:'accueil',title:'accueil',component:FundingsComponent},
    {path:'fullstack',title:'fulls',component:FullstackComponent},
    {path:'home',title:'home',component:FundingsComponent},
    {path:'activities/:categorie',title:'activities',component:ListactiviteComponent},
    {path:'activities/:titre',title:'activities',component:FilterbytitleComponent},
    { path: 'activities/filterbydate/:datecherche', title: 'activities', component: FilterbydateComponent },
    {path:'activities',title:'activities',component:ListactiviteComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',title:'erreur',component:ErreurComponent}
  ]},
  
  
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**',title:'erreur',component:ErreurComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
