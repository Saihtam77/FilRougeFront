import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TachesService } from '../../Services/taches.service';

@Component({
  selector: 'app-tache-create',
  templateUrl: './tache-create.component.html',
  styleUrl: './tache-create.component.css'
})
export class TacheCreateComponent implements OnInit{

  @Input() listeId: number;
  @Output() close = new EventEmitter<void>(); 

  tacheCreate: FormGroup;
  
  constructor(private TacheService: TachesService) {}

  ngOnInit() {
    if (!this.listeId) return;
    console.log(this.listeId);
    this.tacheCreate = new FormGroup({
      nom: new FormControl('', Validators.required),
      listeId: new FormControl(this.listeId, Validators.required),
    });
  }
  
  OnSubmit() {
    this.TacheService.createTache(this.tacheCreate.value);
    this.close.emit();
  }

}
