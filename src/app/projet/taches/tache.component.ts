import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Tache, Commentaire, Liste } from '../../../../Data_types/Projets_types';
import { CommentairesService } from '../../Services/commentaires.service';
import { TachesService } from '../../Services/taches.service';
import { FormOverlayComponent } from '../../form/form-overlay/form-overlay.component';
import { TacheModalComponent } from '../tache-modal/tache-modal.component';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css',
})
export class TacheComponent implements OnInit {

  taches: Tache[];
  @Input() formOverlayRef: FormOverlayComponent;
  @Input() liste: Liste;

  tacheToEdit: Tache;

  tacheModal: Tache;

  editmode: boolean = false;

  constructor(private TachesService: TachesService) {

  }
  @ViewChild('tacheModalRef') tacheModalRef: TacheModalComponent;

  ngOnInit() {
    if (!this.liste) return;
    this.TachesService.getTacheByListeId(this.liste.id).subscribe(
      taches => this.taches = taches
    );
    this.TachesService.tacheEvent$.subscribe(
      () => this.ngOnInit()
    );
  }

  onDeleteTache(id: number) {
    this.TachesService.deleteTache(id);
    this.taches = this.taches.filter(tache => tache.id !== id);
  }

  openTacheModal(tache: Tache) {
    this.tacheModal = tache;
    this.tacheModalRef.ModalOpen();
  }












}
