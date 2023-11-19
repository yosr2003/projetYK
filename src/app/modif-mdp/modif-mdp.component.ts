import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../serv/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-mdp',
  templateUrl: './modif-mdp.component.html',
  styleUrls: ['./modif-mdp.component.css']
})
export class ModifMdpComponent {
  formAdmin!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AdminService) {}

  ngOnInit(): void {
    this.formAdmin = this.fb.group({
      login: ['', Validators.required],
      motpasse: ['', Validators.required],
      newMotpasse: ['', Validators.required], 
    });

  }

  authentif() {
    const login = this.formAdmin.get('login')?.value;
    const password = this.formAdmin.get('motpasse')?.value;
    const newPassword = this.formAdmin.get('newMotpasse')?.value; 

    this.authService.authenticate(login,password).subscribe({
      next:(isValid)=>{
        if (isValid) {
          const admin = this.authService.getCurrentAdmin()
          
          this.authService.updatePassword(admin!.id,newPassword).subscribe({
            next:(response)=>{
              console.log('Mot de passe mis à jour avec succès:', response);
              alert('Mot de passe mis à jour avec succès');
            },error:(error)=>{
              console.error('Erreur lors de la mise à jour du mot de passe:', error);
              alert('Une erreur s\'est produite lors de la mise à jour du mot de passe');
            }
          })
        
          } else {
          // invalid creds !!
            alert('Authentification invalide');
        }
      }
    })
  //   this.authService.updatePassword(newPassword).subscribe(
  //     (response) => {
  //       console.log('Mot de passe mis à jour avec succès:', response);
  //       alert('Mot de passe mis à jour avec succès');
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la mise à jour du mot de passe:', error);
  //       alert('Une erreur s\'est produite lors de la mise à jour du mot de passe');
  //     }
  //   );
  // } else {
  //   alert('Authentification invalide');
  // }

  }
  }










  

