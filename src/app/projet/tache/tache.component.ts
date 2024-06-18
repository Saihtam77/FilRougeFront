import { Component, Input } from '@angular/core';
import { Tache, Commentaire } from '../../../../Data_types/Projets_types';
import { CommentairesService } from '../../Services/commentaires.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css'
})
export class TacheComponent {

  @Input() tache: Tache;
  Commentaires?: Commentaire[];
  constructor(private CommentairesService:CommentairesService ) {
    this.CommentairesService.getCommentaireByTacheId(this.tache.id).subscribe((Commentaires:Commentaire[]) => {
      this.Commentaires = Commentaires;
    });
   }

}
