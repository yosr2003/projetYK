import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // private authenticated = false;
  // private currentUsername: string = '';

  private apiUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient,private router:Router) {}
  
  public getDataFromServer(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  public authenticate(login: string, password: string): Observable<boolean> {
    return this.getDataFromServer().pipe(
      map((admins) => {
        // If there is no admin with the same login and password, the result will be empty
        const result = admins.find((admin: any) => admin.password === password && admin.login === login);
        const valid = result !== undefined;
        // if the creds are valid we set our current
        // admin in the localStorage
        if (valid) this.setCurrentAdmin(result)
        
        return valid;
      })
    );
  }

  // Nouvelle méthode pour mettre à jour le mot de passe
  public updatePassword(id:string,newPassword: string): Observable<any> {
    return this.http.patch<any>(this.apiUrl+'/'+id, { password: newPassword });
  }

  public getCurrentAdmin(){
    const data =localStorage.getItem('admin');
    // if there is no admin registred we return null
    if(!data) return null;

    // parse the data back from string to obj
    const admin = JSON.parse(data)
    return admin
  }

  public setCurrentAdmin(admin:any){
    // delete the password atribute
    delete admin.password
    
    // parse the data from obj to string 
    // to be able to save it on localStorage 
    const data = JSON.stringify(admin)
    localStorage.setItem('admin',data)
  }
  


  
  // logout the admin by clearing 
  // its value from localstorage
  public logout(): void {
    localStorage.removeItem('admin');
    this.router.navigate(['/acceuil']);
  }
//netsawer bch nesthakkha ki nheb nemchi lel site taa admin , b ngif  
  public isAuthenticated(): boolean {
    // check if the localstorage 
    // for the admin is not empty
    return this.getCurrentAdmin() !== null;
  }


}