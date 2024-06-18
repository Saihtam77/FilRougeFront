import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { ProjetPageComponent } from './projet-page/projet-page.component';
import { ListeComponent } from './liste/liste.component';
import { TacheComponent } from './tache/tache.component';


@NgModule({
  declarations: [
    ProjetComponent,
    ProjetPageComponent,
    ListeComponent,
    TacheComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule
  ]
})
export class ProjetModule { }
