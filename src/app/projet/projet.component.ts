import { Component } from '@angular/core';
import { Projet } from '../../../Data_types/Projets_types';
import { ProjetsService } from '../Services/projets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {

  projet?: Projet;

  constructor(private route: ActivatedRoute, private ProjetsService: ProjetsService) {
    this.route.params.subscribe(params => {
      
      this.ProjetsService.getProjetById(params['id']);
      
      this.ProjetsService.projets$.subscribe(
        projets => {
          this.projet = projets[0];
        }
      );

    });
  }





}
