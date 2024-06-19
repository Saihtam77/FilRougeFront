import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet.component';
import { ProjetPageComponent } from './projet-page/projet-page.component';
import { ProjetsComponent } from '../projets/projets.component';
import { ProjetsCreateComponent } from '../projets/projets-create/projets-create.component';
import { ListeComponent } from './listes/liste.component';

const routes: Routes = [
  { path: ':id', component: ProjetComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
