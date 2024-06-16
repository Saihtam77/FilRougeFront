import { Component } from '@angular/core';
import { Commentaire, Liste, Projet, Tache } from '../../../Data_types/Projets_types';
import { ProjetsService } from '../Services/projets.service';
import { ListesService } from '../Services/listes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {

  projet?: Projet;

  listes?: Liste[];
  taches?: Tache[];
  commentaires?: Commentaire[];

  constructor(private route: ActivatedRoute, private ProjetsService: ProjetsService, private ListesService: ListesService) {
    this.route.params.subscribe(params => {

      this.ProjetsService.getProjetById(params['id']).subscribe((projet: Projet) => {
        this.projet = projet;
      });

      this.ListesService.getListes().subscribe((listes: Liste[]) => {
        this.listes = listes.filter(liste => liste.projet_id === params['id']);
      });




    });
  }


}
