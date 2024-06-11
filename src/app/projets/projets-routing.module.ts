import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './projets.component';
import { ProjetsCreateComponent } from './projets-create/projets-create.component';
import { ProjetsEditComponent } from './projets-edit/projets-edit.component';

const routes: Routes = [
  { path: '', component: ProjetsComponent },
  { path: 'Create', component: ProjetsCreateComponent },
  { path: 'Edit/:id', component: ProjetsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
