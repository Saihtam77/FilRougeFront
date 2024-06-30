import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tache } from '../../../../Data_types/Projets_types';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tache-modal',
  templateUrl: './tache-modal.component.html',
  styleUrl: './tache-modal.component.css',
  
})
export class TacheModalComponent implements OnInit{

  @Input() tache: Tache;
  tacheModalState: boolean = false;

  constructor() { }

  ngOnInit() {
    if (!this.tache) return;
  }

  ModalClose() {
    this.tacheModalState = false;
  }

  ModalOpen() {
    this.tacheModalState = true;
  }
  


}
