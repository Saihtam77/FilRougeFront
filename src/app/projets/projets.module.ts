import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { ProjetsComponent } from './projets.component';
import { ProjetsListeComponent } from './projets-liste/projets-liste.component';
import { ProjetsCreateComponent } from './projets-create/projets-create.component';
import { ProjetsEditComponent } from './projets-edit/projets-edit.component';
import { ProjetPageComponent } from './projet-page/projet-page.component';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';


@NgModule({

  declarations: [
    ProjetsComponent,
    ProjetsListeComponent,
    ProjetsCreateComponent,
    ProjetsEditComponent,
    ProjetPageComponent
  ],
  imports: [
    RouterLinkActive,
    RouterLink,
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
