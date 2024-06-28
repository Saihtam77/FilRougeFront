import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../../../../Data_types/Projets_types';
import { CommentairesService } from '../../Services/commentaires.service';

@Component({
  selector: 'app-tache-view',
  templateUrl: './tache-view.component.html',
  styleUrl: './tache-view.component.css'
})
export class TacheViewComponent implements OnInit{

  @Input() tache: Tache;
  constructor(private CommentairesService: CommentairesService) {}

  ngOnInit() {
    if (!this.tache) return;
    this.CommentairesService.getCommentaireByTacheId(this.tache.id).subscribe(
      commentaires => this.tache.commentaires = commentaires
    );
  }

}
