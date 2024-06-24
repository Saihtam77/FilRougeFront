import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Liste, Projet, Tache } from '../../../../../Data_types/Projets_types';
import { ListesService } from '../../../Services/listes.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  listes: Liste[];

  @Input() projet: Projet;

  listeToEdit: Liste;

  formOverlayState = false;
  
  createListeOverlayState = false;
  editListeOverlayState = false;
  
  createTachesOverlayState = false;

  constructor(private ListesService: ListesService) {
  }

  ngOnInit() {
    this.ListesService.getListeByProjetId(this.projet.id);
    this.ListesService.listes$.subscribe(
      listes => this.listes = listes
    );
  }


  onDeleteListe(id: number) {
    this.ListesService.deleteListe(id);
    this.listes = this.listes.filter(liste => liste.id !== id);
  }





  //Overlay
  formOverlayClose() {
    this.formOverlayState = false;
    this.createListeOverlayState = false;
    this.editListeOverlayState = false;
    this.createTachesOverlayState = false;
  }
  //affichage de form
  CreateListeFormOverlay() {
    this.createListeOverlayState = !this.createListeOverlayState;
  }

  CreateTacheFormOverlay() {
    this.createTachesOverlayState = !this.createTachesOverlayState;
  }

  EditListeFormOverlay(liste: Liste) {
    this.listeToEdit = liste;
    this.editListeOverlayState = !this.editListeOverlayState;
  }







}
