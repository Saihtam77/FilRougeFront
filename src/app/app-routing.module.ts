import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'Projets', loadChildren: () => import('./projets/projets.module').then(m => m.ProjetsModule) },
  { path: 'Error404', loadChildren: () => import('./errors/error404/error404.module').then(m => m.Error404Module) },
  { path: 'Projet', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
  { path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
