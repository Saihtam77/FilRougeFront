import { Component, Input, OnInit } from '@angular/core';
import { Tache, Commentaire, Liste } from '../../../../Data_types/Projets_types';
import { CommentairesService } from '../../Services/commentaires.service';
import { TachesService } from '../../Services/taches.service';
import { FormOverlayComponent } from '../../form/form-overlay/form-overlay.component';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css'
})
export class TacheComponent implements OnInit {

  taches: Tache[];
  @Input() formOverlayRef:FormOverlayComponent;
  @Input() liste: Liste;

  tacheToEdit: Tache;

  constructor(private TachesService: TachesService) {

  }


  ngOnInit() {
    if (!this.liste) return;
    this.TachesService.getTacheByListeId(this.liste.id).subscribe(
      taches => this.taches = taches
    );
  }

  onDeleteTache(id: number) {
    this.TachesService.deleteTache(id);
    this.taches = this.taches.filter(tache => tache.id !== id);
  }







}
