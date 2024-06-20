import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],

  exports: [
    NavBarComponent,
  ]
})
export class NavigationModule { }
