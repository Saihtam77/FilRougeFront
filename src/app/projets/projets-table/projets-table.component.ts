import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Projet } from '../../../../Data_types/Projets_types';
import { ProjetsService } from '../../Services/projets.service';

@Component({
  selector: 'app-projets-table',
  templateUrl: './projets-table.component.html',
  styleUrl: './projets-table.component.css'
})
export class ProjetsTableComponent {
  @Input() projets: Projet[];
  @Output() OnDeleteEvent = new EventEmitter<number>();
  
  constructor(private projetsService: ProjetsService) {

  }

  OnDelete(id: number) {
    this.OnDeleteEvent.emit(id); // Notifie le composant parent
  }
}
