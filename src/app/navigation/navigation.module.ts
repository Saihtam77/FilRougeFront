import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarProjetsComponent } from './nav-bar-projets/nav-bar-projets.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NavBarProjetsComponent
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ]
})
export class NavigationModule { }
