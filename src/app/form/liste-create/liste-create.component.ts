import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListesService } from '../../Services/listes.service';

@Component({
  selector: 'app-liste-create',
  templateUrl: './liste-create.component.html',
  styleUrl: './liste-create.component.css'
})
export class ListeCreateComponent {

  listeform:FormGroup;
  @Input() projetId: number;

  constructor(private ListesService: ListesService) { 
    this.listeform = new FormGroup({
      nom: new FormControl('', Validators.required),
      projetId: new FormControl(this.projetId)
    });
  }

  OnSubmit() {
    this.ListesService.createListe(this.listeform.value);
    this.listeform.reset();
  }

}
