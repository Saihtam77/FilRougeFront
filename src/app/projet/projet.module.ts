import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { ListeComponent } from './ListeComponents/listes/liste.component';
import { TacheComponent } from './TachesComponents/taches/tache.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ListeCreateComponent } from './ListeComponents/liste-create/liste-create.component';
import { TacheCreateComponent } from './TachesComponents/tache-create/tache-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjetActionsBoardComponent } from './projet-actions-board/projet-actions-board.component';
import { ListeEditComponent } from './ListeComponents/liste-edit/liste-edit.component';


@NgModule({
  declarations: [
    ProjetComponent,
    ListeComponent,
    TacheComponent,
    ListeCreateComponent,
    TacheCreateComponent,
    ProjetActionsBoardComponent,
    ListeEditComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProjetModule { }
