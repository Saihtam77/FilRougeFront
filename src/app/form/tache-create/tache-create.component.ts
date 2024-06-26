import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TachesService } from '../../Services/taches.service';

@Component({
  selector: 'app-tache-create',
  templateUrl: './tache-create.component.html',
  styleUrl: './tache-create.component.css'
})
export class TacheCreateComponent {

  @Input() listeId: number;

  tacheCreate: FormGroup;
  
  constructor(private TacheService: TachesService) {
    this.tacheCreate = new FormGroup({
      nom: new FormControl('', Validators.required),
      listeId: new FormControl('', Validators.required),
    });
  }

  OnSubmit() {
    this.TacheService.createTache(this.tacheCreate.value);
    this.tacheCreate.reset();
  }

}
