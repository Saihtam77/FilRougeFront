import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeCreateComponent } from './liste-create/liste-create.component';
import { ListeEditComponent } from './liste-edit/liste-edit.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';
import { TacheCreateComponent } from './tache-create/tache-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';



@NgModule({
  declarations: [
    ListeCreateComponent,
    ListeEditComponent,
    TacheEditComponent,
    TacheCreateComponent,
    FormOverlayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],

  exports: [
    FormOverlayComponent
  ]
})
export class FormModule { }
