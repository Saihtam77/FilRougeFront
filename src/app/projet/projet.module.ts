import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { ProjetPageComponent } from './projet-page/projet-page.component';


@NgModule({
  declarations: [
    ProjetComponent,
    ProjetPageComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule
  ]
})
export class ProjetModule { }
