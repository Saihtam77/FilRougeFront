import { Component, Input } from '@angular/core';
import { Liste } from '../../../../Data_types/Projets_types';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  @Input()listes:Liste[];

}
