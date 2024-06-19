import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { ProjetPageComponent } from './projet-page/projet-page.component';
import { ListeComponent } from './listes/liste.component';
import { TacheComponent } from './taches/tache.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ListeCreateComponent } from './liste-create/liste-create.component';
import { TacheCreateComponent } from './tache-create/tache-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjetActionsBoardComponent } from './projet-actions-board/projet-actions-board.component';


@NgModule({
  declarations: [
    ProjetComponent,
    ProjetPageComponent,
    ListeComponent,
    TacheComponent,
    ListeCreateComponent,
    TacheCreateComponent,
    ProjetActionsBoardComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProjetModule { }
