import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListesService } from '../../../Services/listes.service';
import { Liste, Projet } from '../../../../../Data_types/Projets_types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-edit',
  templateUrl: './liste-edit.component.html',
  styleUrl: './liste-edit.component.css'
})
export class ListeEditComponent {

  @Input() projetId: number;
  @Input() liste: Liste;
  
  listeEdit: FormGroup;

  suscessMessage = false;

  constructor(private ListesService: ListesService) {}

  ngOnInit() {

    this.listeEdit = new FormGroup({
      nom: new FormControl(this.liste.nom),
      projetId: new FormControl(this.projetId)
    });
    console.log(this.liste.id);

  }

  onSubmit() {
    console.log(this.listeEdit.value);
    this.ListesService.updateListe(this.liste.id, this.listeEdit.value); 
    this.suscessMessage = true;
    this.listeEdit.reset();
  }
}
