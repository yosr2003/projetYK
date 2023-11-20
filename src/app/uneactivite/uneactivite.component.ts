import { Component, Input } from '@angular/core';
import { Activite } from '../classes/activite';

@Component({
  selector: 'app-uneactivite',
  templateUrl: './uneactivite.component.html',
  styleUrls: ['./uneactivite.component.css']
})
export class UneactiviteComponent {
  @Input() active!:Activite;
  @Input() index!: number;
}
