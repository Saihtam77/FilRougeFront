import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Liste, Projet, Tache } from '../../../../../Data_types/Projets_types';
import { TachesService } from '../../../Services/taches.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ListesService } from '../../../Services/listes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  listes: Liste[];

  @Input() projet: Projet;

  listeId: number;//for edit

  createOverlayState = false;
  editOverlayState = false;

  constructor(private ListesService: ListesService) {
  }

  ngOnInit() {
    this.ListesService.getListeByProjetId(this.projet.id).subscribe(
      listes => this.listes = listes
    );
  }


  onDeleteListe(id: number) {
    this.ListesService.deleteListe(id);
    this.listes = this.listes.filter(liste => liste.id !== id);
  }


  CreateFormOverlay() {
    this.createOverlayState = !this.createOverlayState;
    this.editOverlayState = false;
  }

  EditFormOverlay(id: number) {
    this.listeId = id;
    this.editOverlayState = !this.editOverlayState;
    this.createOverlayState = false;
  }







}
