import { Component } from '@angular/core';
import { Projet } from '../../../Data_types/Projets_types';
import { ProjetsService } from '../projets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {

  projet?: Projet;

  constructor(private ProjetsService: ProjetsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.ProjetsService.getProjetById(params['id']).subscribe((projet: Projet) => {
        this.projet = projet;
      });
    });
  }


}
