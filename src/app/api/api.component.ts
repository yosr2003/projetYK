import { Component } from '@angular/core';
import { ApiService } from '../api.service';
interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  // Autres propriétés du personnage si nécessaire
}

interface Episode {
  id: number;
  name: string;
  episode: string;
  // Autres propriétés de l'épisode si nécessaire
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  // Autres propriétés de la localisation si nécessaire
}
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  characters: Character[] = [];
  episodes: Episode[] = [];
  locations: Location[] = [];

  selectedDataType: string = 'character';
  selectedCharacterId?: number;
  selectedCharacter?: Character;

  selectedEpisodeId?: number;
  selectedEpisode?: Episode;

  selectedLocationId?: number;
  selectedLocation?: Location;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe(data => {
      this.characters = data.results;
    });

    this.apiService.getEpisodes().subscribe(data => {
      this.episodes = data.results;
    });

    this.apiService.getLocations().subscribe(data => {
      this.locations = data.results;
    });
  }

  loadCharacterDetails(): void {
    if (this.selectedCharacterId) {
      this.apiService.getCharacterById(this.selectedCharacterId).subscribe(characterDetails => {
        this.selectedCharacter = characterDetails;
      });
    }
  }

  loadEpisodeDetails(): void {
    if (this.selectedEpisodeId) {
      this.apiService.getEpisodeById(this.selectedEpisodeId).subscribe(episodeDetails => {
        this.selectedEpisode = episodeDetails;
      });
    }
  }

  loadLocationDetails(): void {
    if (this.selectedLocationId) {
      this.apiService.getLocationById(this.selectedLocationId).subscribe({
        next: locationDetails => {
          this.selectedLocation = locationDetails;
        },
        error: error => {
          console.error('Error loading location details:', error);
        }
      });
    }
  }
}
