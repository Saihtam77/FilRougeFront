import { Component } from '@angular/core';
import { Projet } from '../../../Data_types/Projets_types';
import { ProjetsService } from '../projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {

  projets: Projet[];

  constructor(private projetsService: ProjetsService) {
    this.projetsService.getProjets().subscribe((projets: Projet[]) => {
      this.projets = projets;
    });
  }

}
