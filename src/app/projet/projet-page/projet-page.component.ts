import { Component, Input, OnInit } from '@angular/core';
import { Liste, Projet } from '../../../../Data_types/Projets_types';
import { ListesService } from '../../Services/listes.service';

@Component({
  selector: 'app-projet-page',
  templateUrl: './projet-page.component.html',
  styleUrl: './projet-page.component.css'
})
export class ProjetPageComponent implements OnInit{
  @Input() projet: Projet;
  
  listes?:Liste[];
  
  constructor(private ListesService:ListesService) {}

  ngOnInit() {
    this.ListesService.listes$.subscribe(
      listes => this.listes = listes
    );
    this.ListesService.getListeByProjetId(this.projet.id).subscribe();
  }

  

  


}
