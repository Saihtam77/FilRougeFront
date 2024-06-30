import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommentairesService } from '../../Services/commentaires.service';
import { Commentaire } from '../../../../Data_types/Projets_types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentaireCreateComponent } from '../../form/commentaire-create/commentaire-create.component';
import { CommentaireEditComponent } from '../../form/commentaire-edit/commentaire-edit.component';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrl: './commentaire.component.css'
})
export class CommentaireComponent implements OnInit {

  @Input() tacheId: number;

  commentaires: Commentaire[];
  commentaireToEdit: Commentaire;
  formEditState: boolean = false;

  @ViewChild('formCreateRef') formCreateRef: CommentaireCreateComponent;
  @ViewChild('formEditRef') formEditRef: CommentaireEditComponent;


  constructor(private CommentairesService: CommentairesService) { }

  ngOnInit() {
    if (!this.tacheId) return;
    this.CommentairesService.getCommentaireByTacheId(this.tacheId).subscribe(
      commentaires => this.commentaires = commentaires
    );

    this.CommentairesService.commentaireEvent$.subscribe(
      () => this.ngOnInit()
    );

  }

  onEdit(commentaire: Commentaire) {
    this.commentaireToEdit = commentaire;
    this.formEditState = true;
  }

  onCancel() {
    this.formEditState = false;
  }


  onDelete(commentaire: Commentaire) {
    this.CommentairesService.deleteCommentaire(commentaire.id)

  }


}
