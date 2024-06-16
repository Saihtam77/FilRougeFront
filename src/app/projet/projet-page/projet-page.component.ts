import { Component, Input, } from '@angular/core';
import { Commentaire, Liste, Projet, Tache } from '../../../../Data_types/Projets_types';

@Component({
  selector: 'app-projet-page',
  templateUrl: './projet-page.component.html',
  styleUrl: './projet-page.component.css'
})
export class ProjetPageComponent {
  @Input() projet: Projet;
  @Input() listes?: Liste[] | null;
  @Input() taches?: Tache[] | null;
  @Input() commentaires?: Commentaire[] | null;

}
