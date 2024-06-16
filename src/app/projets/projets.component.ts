import { Component, OnInit } from '@angular/core';
import { Projet } from '../../../Data_types/Projets_types';
import { ProjetsService } from '../Services/projets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {

  projets: Projet[];
  

  constructor(private projetsService: ProjetsService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.projetsService.projets$.subscribe(
      projets => this.projets = projets
    );
    this.projetsService.getProjets();
  }

 

  OnDelete(id: number) {
    this.projetsService.deleteProjet(id);
  }

}
