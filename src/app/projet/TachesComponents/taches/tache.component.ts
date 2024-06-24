import { Component, Input, OnInit } from '@angular/core';
import { Tache, Commentaire } from '../../../../../Data_types/Projets_types';
import { CommentairesService } from '../../../Services/commentaires.service';
import { TachesService } from '../../../Services/taches.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css'
})
export class TacheComponent implements OnInit {

  taches: Tache[];
  @Input() listeId: number;
  constructor(private TachesService: TachesService) {

  }

  ngOnInit() {
    this.TachesService.getTacheByListeId(this.listeId).subscribe(
      taches => this.taches = taches
    );
  }


}
