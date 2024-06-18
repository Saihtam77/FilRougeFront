import { Component, Input, OnInit } from '@angular/core';
import { Liste, Tache } from '../../../../Data_types/Projets_types';
import { TachesService } from '../../Services/taches.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit{

  @Input()liste:Liste;

  taches?:Tache[];

  constructor(private TachesService:TachesService) {}

  ngOnInit() {
    this.TachesService.getTacheByListeId(this.liste.id).subscribe(
      taches => this.taches = taches
    );
  }

}
