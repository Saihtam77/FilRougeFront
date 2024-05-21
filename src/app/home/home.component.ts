import { Component } from '@angular/core';
import { ProjetsService } from '../projets.service';
import { Projet } from '../../../Data_types/Projets_types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  projets: Projet[];
  constructor(private projetsService: ProjetsService) {
    this.projetsService.getProjets().subscribe((data) => {
      this.projets = data;
    });
  }
}
