import { Component, Input } from '@angular/core';
import { Liste } from '../../../../Data_types/Projets_types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListesService } from '../../Services/listes.service';

@Component({
  selector: 'app-liste-edit',
  templateUrl: './liste-edit.component.html',
  styleUrl: './liste-edit.component.css'
})
export class ListeEditComponent {

  @Input() liste: Liste;

  listeEdit: FormGroup;
  
  constructor(private ListeService: ListesService) {
    this.listeEdit = new FormGroup({
      nom: new FormControl(this.liste.nom, Validators.required),
    });
  }

  OnSubmit() {
    this.ListeService.updateListe(this.liste.id, this.listeEdit.value);
    this.listeEdit.reset();
  }



}
