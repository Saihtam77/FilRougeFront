import { Component, OnInit } from '@angular/core';
import { Liste, Projet } from '../../../Data_types/Projets_types';
import { ProjetsService } from '../Services/projets.service';
import { ActivatedRoute } from '@angular/router';
import { ListesService } from '../Services/listes.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent implements OnInit {

  projet: Projet;

  constructor(private route: ActivatedRoute, private ProjetsService: ProjetsService, private ListesService: ListesService) { }

  //data


  //form
  listeCreate: boolean = false;

  isEditForm = false;




  ngOnInit() {
    
    this.route.params.subscribe(params => {

      this.ProjetsService.getProjetById(params['id']).subscribe(
        projet => this.projet = projet
      );

      this.ListesService.getListeByProjetId(params['id']).subscribe(
        listes => this.projet.listes = listes
      );

    });
  }

  DeleteListe(id: number) {
    this.ListesService.deleteListe(id);
  }


  DisplayFormCreate() {
    this.listeCreate = !this.listeCreate;
    console.log(this.listeCreate);
  }

  EditOverlay() {
    this.isEditForm = !this.isEditForm;
  }





}
