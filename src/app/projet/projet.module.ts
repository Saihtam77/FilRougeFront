import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { ListeComponent } from './listes/liste.component';
import { TacheComponent } from './taches/tache.component';
import { ReactiveFormsModule, Form } from '@angular/forms';
import { ProjetActionsBoardComponent } from './projet-actions-board/projet-actions-board.component';
import { FormModule } from '../form/form.module';
import { TacheViewComponent } from './tache-view/tache-view.component';
import { CommentaireComponent } from './commentaire/commentaire.component';


@NgModule({
  declarations: [
    ProjetComponent,
    ListeComponent,
    TacheComponent,
    ProjetActionsBoardComponent,
    TacheViewComponent,
    CommentaireComponent,

  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    ReactiveFormsModule,
    FormModule
  ],
})
export class ProjetModule { }
