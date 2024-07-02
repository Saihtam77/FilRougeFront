import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TachesService } from '../../Services/taches.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tache } from '../../../../Data_types/Projets_types';

@Component({
  selector: 'app-tache-edit',
  templateUrl: './tache-edit.component.html',
  styleUrl: './tache-edit.component.css'
})
export class TacheEditComponent implements OnInit {
  @Input() tache: Tache;
  @Output() close = new EventEmitter<void>(); 
  
  tacheEdit: FormGroup;

  constructor(private TachesService: TachesService) {

  }

  ngOnInit() {
    if (!this.tache) return;
    this.tacheEdit = new FormGroup({
      nom: new FormControl(this.tache.nom, Validators.required),
      description: new FormControl(this.tache.description,[Validators.pattern('^[a-zA-Z0-9 ]*$')]),
    });
  }



  OnSubmit() {
    this.TachesService.updateTache(this.tache.id, this.tacheEdit.value);
    this.close.emit();
  }


}
