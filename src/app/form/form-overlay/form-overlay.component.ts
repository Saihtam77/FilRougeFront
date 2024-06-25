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

  FormOverlayOpenOrClose() {
    this.FormOverlayService.closeFormOverlay();
  }






}
