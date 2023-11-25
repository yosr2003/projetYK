import { Component, Input } from '@angular/core';
import { Activite } from '../classes/activite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uneactivite',
  templateUrl: './uneactivite.component.html',
  styleUrls: ['./uneactivite.component.css']
})
export class UneactiviteComponent {
  constructor(private router:Router){}

  @Input() active!:Activite;
  @Input() index!: number;
  Infos(identif: number) {
    this.router.navigate(['selectedActivity',identif]);
}
}
