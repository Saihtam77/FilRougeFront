import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmiteButtonComponent } from './submite-button/submite-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    SubmiteButtonComponent,
    DeleteButtonComponent,
    InfoButtonComponent,
    EditButtonComponent
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ]
})
export class SharedModule { }
