import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  private apiUrl = `${this.baseUrl}/character`;
  private episodeUrl = `${this.baseUrl}/episode`;
  private locationUrl = `${this.baseUrl}/location`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getEpisodes(): Observable<any> {
    return this.http.get<any>(this.episodeUrl);
  }

  getLocations(): Observable<any> {
    return this.http.get<any>(this.locationUrl);
  }

  get(endpoint: string, params?: any): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<any>(url, { params });
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getEpisodeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.episodeUrl}/${id}`);
  }

  getLocationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.locationUrl}/${id}`);
  }
}
