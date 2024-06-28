import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Liste } from '../../../../Data_types/Projets_types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListesService } from '../../Services/listes.service';

@Component({
  selector: 'app-liste-edit',
  templateUrl: './liste-edit.component.html',
  styleUrl: './liste-edit.component.css'
})
export class ListeEditComponent implements OnInit{

  @Input() liste: Liste;
  @Output() close = new EventEmitter<void>(); 

  listeEdit: FormGroup;
  
  constructor(private ListeService: ListesService) {
    
  }

  ngOnInit() {
    if (!this.liste) return;
    console.log(this.liste);
    this.listeEdit = new FormGroup({
      nom: new FormControl(this.liste.nom, Validators.required),
      projetId: new FormControl(this.liste.projetId)
    });
  }

  OnSubmit() {
    this.ListeService.updateListe(this.liste.id, this.listeEdit.value);
    this.close.emit();
  }



}
