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

  @Input() liste: Liste;
  listeEdit: FormGroup;

  constructor(private ListesService: ListesService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(this.liste.nom);
        this.listeEdit = new FormGroup({
          nom: new FormControl(""),
          projetId: new FormControl(params['id'])
        });
      })

  }

  onSubmit() {
    console.log(this.listeEdit.value);
    this.ListesService.updateListe(this.liste.id, this.listeEdit.value);
    this.listeEdit.reset();
  }
}
