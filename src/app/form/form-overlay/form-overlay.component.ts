import { Component, Input } from '@angular/core';
import { Tache } from '../../../../Data_types/Projets_types';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrl: './form-overlay.component.css'
})
export class FormOverlayComponent {

  @Input() OverlayEvent: boolean;

  formOverlayState: boolean = false;
  listeCreateFormState: boolean = false;
  listeEditFormState: boolean = false;
  tacheCreateFormState: boolean = false;
  tacheEditFormState: boolean = false;

  constructor() { }

  FormOverlayOpenOrClose(state: boolean) {
    if (this.OverlayEvent) {
      this.formOverlayState = false;

      this.listeCreateFormState = false;
      this.listeEditFormState = false;

      this.tacheCreateFormState = false;
      this.tacheEditFormState = false;

    } 
  }

  ListeCreateForm() {
    this.listeCreateFormState = true;
  }
  ListeEditForm() {
    this.listeEditFormState = true;
  }

  TacheCreateForm() {
    this.tacheCreateFormState = true;
  }

  TacheEditForm(tache: Tache) {
    this.tacheEditFormState = true;
  }



}
