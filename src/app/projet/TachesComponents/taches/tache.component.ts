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

  tacheToEdit: Tache;

  formOverlayState = false;

  createTacheOverlayState = false;
  editTacheOverlayState = false;

  constructor(private TachesService: TachesService) {

  }

  ngOnInit() {
    this.TachesService.getTacheByListeId(this.listeId).subscribe(
      taches => this.taches = taches
    );
  }



  //Overlay

//Overlay
formOverlayClose() {
  this.formOverlayState = false;
  this.createTacheOverlayState = false;
  this.editTacheOverlayState = false;
}
//affichage de form
CreateTacheFormOverlay() {
  this.createTacheOverlayState = !this.createTacheOverlayState;
}


EditTacheFormOverlay(tache: Tache) {
  this.tacheToEdit = tache;
  this.editTacheOverlayState = !this.editTacheOverlayState;
}


}
