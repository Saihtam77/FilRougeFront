import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../../../../Data_types/Projets_types';
import { FormOverlayService } from '../../Services/form-overlay.service';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrl: './form-overlay.component.css'
})
export class FormOverlayComponent implements OnInit {

  formOverlayState: boolean;

  listeCreateFormState: boolean;
  listeEditFormState: boolean;
  tacheCreateFormState: boolean;
  tacheEditFormState: boolean;

  constructor(private FormOverlayService: FormOverlayService) {

  }

  ngOnInit(): void {
    this.FormOverlayService.formOverlayState$.subscribe(
      state => this.formOverlayState = state
    );
  }

  FormOverlayClose() {
    this.FormOverlayService.closeFormOverlay();
    
    this.listeCreateFormState = false;
    this.listeEditFormState = false;
    
    this.tacheCreateFormState = false;
    this.tacheEditFormState = false;
  }

  openListeCreateForm() {
    this.listeCreateFormState = true;
  }

  openListeEditForm() {
    this.listeEditFormState = true;
  }

  openTacheCreateForm() {
    this.tacheCreateFormState = true;
  }

  openTacheEditForm() {
    this.tacheEditFormState = true;
  }








}
