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
  liste: Liste;

  tacheId: number;
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

  FormOverlayOpen(action: string) {
    this.FormOverlayService.openFormOverlay();

    if (action === 'listeCreate') {
      this.openListeCreateForm();
      
      this.closeListeEditForm();
      this.closeTacheCreateForm();
      this.closeTacheEditForm();
    }

    if (action === 'listeEdit') {
      this.openListeEditForm();
      
      this.closeListeCreateForm();
      this.closeTacheCreateForm();
      this.closeTacheEditForm();
    }

    if (action === 'tacheCreate') {
      this.openTacheCreateForm();
      
      this.closeListeCreateForm();
      this.closeListeEditForm();
      this.closeTacheEditForm();
    }

    if (action === 'tacheEdit') {
      this.openTacheEditForm();
      
      this.closeListeCreateForm();
      this.closeListeEditForm();
      this.closeTacheCreateForm();
    }


  }
  
  openListeCreateForm() {
    this.listeCreateFormState = true;
  }
  closeListeCreateForm() {
    this.listeCreateFormState = false;
  }
  openListeEditForm() {
    this.listeEditFormState = true;
  }
  closeListeEditForm() {
    this.listeEditFormState = false;
  }
  openTacheCreateForm() {
    this.tacheCreateFormState = true;
  }
  closeTacheCreateForm() {
    this.tacheCreateFormState = false;
  }
  openTacheEditForm() {
    this.tacheEditFormState = true;
  }
  closeTacheEditForm() {
    this.tacheEditFormState = false;
  }








}
