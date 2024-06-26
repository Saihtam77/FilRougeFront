import { Component, Input, OnInit} from '@angular/core';
import { ListesService } from '../../Services/listes.service';
import { Liste, Projet } from '../../../../Data_types/Projets_types';
import { FormOverlayService } from '../../Services/form-overlay.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  listes: Liste[];

  @Input() projet: Projet;

  listeToEdit: Liste;


  

  constructor(private ListesService: ListesService, private FormOverlayService: FormOverlayService) {}

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


  // setOverlayEvent(form:string) {
  //   this.FormOverlayService.openFormOverlay();
  //   if (form === 'listeCreate') {
  //     this.FormOverlayService.openListeCreateForm();
  //   }
  //   if (form === 'listeEdit') {
  //     this.FormOverlayService.openListeEditForm();
  //   }
  //   if (form === 'tacheCreate') {
  //     this.FormOverlayService.openTacheCreateForm();
  //   }
  //   if (form === 'tacheEdit') {
  //     this.FormOverlayService.openTacheEditForm();
  //   }
  // }

  








}
