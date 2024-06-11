import { Component, Input } from '@angular/core';
import { Projet } from '../../../../Data_types/Projets_types';

@Component({
  selector: 'app-projets-table',
  templateUrl: './projets-table.component.html',
  styleUrl: './projets-table.component.css'
})
export class ProjetsTableComponent {
  @Input() projets: Projet[];
}
