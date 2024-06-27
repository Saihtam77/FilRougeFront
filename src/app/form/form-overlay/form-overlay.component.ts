import { Component, Input, OnInit } from '@angular/core';
import { Liste, Tache } from '../../../../Data_types/Projets_types';
import { FormOverlayService } from '../../Services/form-overlay.service';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrl: './form-overlay.component.css'
})
export class FormOverlayComponent implements OnInit {

  //State of form
  formOverlayState: boolean;

  listeCreateFormState: boolean;
  listeEditFormState: boolean;
  tacheCreateFormState: boolean;
  tacheEditFormState: boolean;

  //Data for edit
  projetId: number;
  listeId: number;
  tacheId: number;

  liste: Liste;
  tache: Tache;

  constructor(private FormOverlayService: FormOverlayService) {

  }

  ngOnInit(): void {
    this.FormOverlayService.formOverlayState$.subscribe(
      state => this.formOverlayState = state
    );
  }

  FormOverlayClose() {
    this.FormOverlayService.closeFormOverlay();

    this.closeListeCreateForm();
    this.closeListeEditForm();
    this.closeTacheCreateForm();
    this.closeTacheEditForm();

  }

  openListeCreateForm(projetId: number) {
    this.projetId = projetId;
    this.listeCreateFormState = true;

    this.FormOverlayService.openFormOverlay();

    this.closeListeEditForm();
    this.closeTacheCreateForm();
    this.closeTacheEditForm();
  }
  closeListeCreateForm() {
    this.listeCreateFormState = false;
  }

  openListeEditForm(liste: Liste) {
    this.liste = liste;
    this.listeEditFormState = true;

    this.FormOverlayService.openFormOverlay();

    this.closeListeCreateForm();
    this.closeTacheCreateForm();
    this.closeTacheEditForm();
  }
  closeListeEditForm() {
    this.listeEditFormState = false;
  }

  openTacheCreateForm(listeId: number) {
    this.listeId = listeId;
    this.tacheCreateFormState = true;

    this.FormOverlayService.openFormOverlay();

    this.closeListeCreateForm();
    this.closeListeEditForm();
    this.closeTacheEditForm();
  }
  closeTacheCreateForm() {
    this.tacheCreateFormState = false;
  }

  openTacheEditForm(tache: Tache) {
    this.tache = tache;
    this.tacheEditFormState = true;

    this.FormOverlayService.openFormOverlay();

    this.closeListeCreateForm();
    this.closeListeEditForm();
    this.closeTacheCreateForm();
  }
  closeTacheEditForm() {
    this.tacheEditFormState = false;
  }

}
