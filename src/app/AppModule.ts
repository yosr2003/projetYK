import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DivisionComponent } from './division/division.component';
import { ScrollComponent } from './scroll/scroll.component';


import { FundingsComponent } from './fundings/fundings.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { EssaiComponent } from './essai/essai.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { FullstackComponent } from './fullstack/fullstack.component';

import { SearchComponent } from './search/search.component';
import { SearchdateComponent } from './searchdate/searchdate.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifMdpComponent } from './modif-mdp/modif-mdp.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './categorie/categorie.component';
import { ListactiviteComponent } from './listactivite/listactivite.component';
import { UneactiviteComponent } from './uneactivite/uneactivite.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DivisionComponent,
    ScrollComponent,

    FundingsComponent, 
    HamburgerComponent,
    ServicesComponent,
    AboutusComponent,
 
    EssaiComponent,
    Accueil2Component,
    FullstackComponent,
   
    SearchComponent,
    SearchdateComponent,
    ConnexionComponent,
    ModifMdpComponent,
  CategorieComponent,
  ListactiviteComponent,
  UneactiviteComponent

    
   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}