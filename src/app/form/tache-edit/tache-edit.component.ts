import { Component, Input } from '@angular/core';
import { TachesService } from '../../Services/taches.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tache } from '../../../../Data_types/Projets_types';

@Component({
  selector: 'app-tache-edit',
  templateUrl: './tache-edit.component.html',
  styleUrl: './tache-edit.component.css'
})
export class TacheEditComponent {
  @Input() tache:Tache;
  tacheEdit: FormGroup;
  
  constructor(private TachesService: TachesService) {
    this.tacheEdit = new FormGroup({
      nom: new FormControl('', Validators.required),
      listeId: new FormControl('', Validators.required),
    });
  }

  OnSubmit() {
    this.TachesService.updateTache(this.tache.id, this.tacheEdit.value);
    this.tacheEdit.reset();
  }

  
}
