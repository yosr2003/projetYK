import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../serv/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formAdmin!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AdminService, private router:Router) {}
 
  Admins: any; // Variable pour stocker les données du serveur

  ngOnInit(): void {
    this.formAdmin = this.fb.nonNullable.group({
      login: ['', Validators.required],
      motpasse: ['', Validators.required],
    });

    // Récupérer les données depuis le serveur au chargement du composant
    // this.authService.getDataFromServer().subscribe((data) => {this.serverData = data;}, (error) => {  console.error('Erreur lors de la récupération des données du serveur:', error); },
    this.authService.getDataFromServer().subscribe
    ({
      next:(data) => {this.Admins = data;
      
      },
      
      error: (error) => { 
         console.error(error);
     }
     
  
  });}
  authentif() {
    const login = this.formAdmin.get('login')?.value;
    const password = this.formAdmin.get('motpasse')?.value;

    // Comparer les données avec celles du serveur
    this.authService.authenticate(login,password).subscribe({
      next:(isValid)=>{
        if (isValid) {
          alert('Valide');
          this.router.navigate(['/backoff']); 

        } else {
          alert('Invalide');  
        }
      }
    })
  }
}
