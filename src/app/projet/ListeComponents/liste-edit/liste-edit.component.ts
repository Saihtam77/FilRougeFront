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
  @Input() listeId: number;
  
  listeEdit: FormGroup;

  constructor(private ListesService: ListesService) {}

  ngOnInit() {

    this.listeEdit = new FormGroup({
      nom: new FormControl(""),
      projetId: new FormControl(this.projetId)
    });
    console.log(this.listeId);

  }

  onSubmit() {
    console.log(this.listeEdit.value);
    this.ListesService.updateListe(this.listeId, this.listeEdit.value); 
    this.listeEdit.reset();
  }
}
