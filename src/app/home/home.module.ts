import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterLink,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
