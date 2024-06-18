import { Component, Input } from '@angular/core';
import { Liste, Tache } from '../../../../Data_types/Projets_types';
import { TachesService } from '../../Services/taches.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  @Input()liste:Liste;

  taches?:Tache[];

  constructor(private TachesService:TachesService) {
    this.TachesService.getTacheByListeId(this.liste.id).subscribe((taches:Tache[]) => {
      this.taches = taches;
    });

  }

}
