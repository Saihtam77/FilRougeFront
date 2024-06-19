import { Component, Input, OnInit } from '@angular/core';
import { Liste } from '../../../../Data_types/Projets_types';
import { FormControl, FormGroup } from '@angular/forms';
import { ListesService } from '../../Services/listes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-create',
  templateUrl: './liste-create.component.html',
  styleUrl: './liste-create.component.css'
})
export class ListeCreateComponent implements OnInit{

  @Input() projetId: number;
  liste: FormGroup ;

  constructor(private ListesService: ListesService, private router: Router) {

  }

  ngOnInit() {
    this.liste = new FormGroup({
      nom: new FormControl(''),
      projetId: new FormControl(this.projetId)
    });
  }

  onSubmit() {
    console.log(this.liste.value);
    this.ListesService.createListe(this.liste.value);
    this.liste.reset();
  }
}
