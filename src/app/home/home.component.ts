import { Component } from '@angular/core';
import { ProjetsService } from '../Services/projets.service';
import { Projet } from '../../../Data_types/Projets_types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  projets: Projet[];
  constructor(private projetsService: ProjetsService) {
  }

  ngOnInit(): void {
    this.projetsService.projets$.subscribe(
      projets => this.projets = projets
    );
    this.projetsService.getProjets();
  }
}
