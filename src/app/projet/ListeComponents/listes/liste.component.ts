import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Liste, Tache } from '../../../../../Data_types/Projets_types';
import { TachesService } from '../../../Services/taches.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  @Input() liste: Liste;
  taches: Tache[];
 
  @Output() OnDeleteEvent = new EventEmitter<number>();
  @Output() OnEditOverlayEvent = new EventEmitter();

  listeName: FormGroup;
  
  isEditForm = false;



  constructor(private TachesService: TachesService) {

  }


  ngOnInit() {

    if (!this.liste) return;
    this.TachesService.getTacheByListeId(this.liste.id).subscribe(
      taches => this.taches = taches
    );

    this.listeName = new FormGroup({
      nom: new FormControl("")
    });

  }

  //Edit liste methode
  toogleEditForm() {
    this.isEditForm = !this.isEditForm;
  }
  
  OnEditOverlay() {
    this.OnEditOverlayEvent.emit();
  }
  OnDelete(id: number) {
    this.OnDeleteEvent.emit(id);
  }






}
