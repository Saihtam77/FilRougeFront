import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Commentaire } from '../../../../Data_types/Projets_types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentairesService } from '../../Services/commentaires.service';

@Component({
  selector: 'app-commentaire-edit',
  templateUrl: './commentaire-edit.component.html',
  styleUrl: './commentaire-edit.component.css'
})
export class CommentaireEditComponent implements OnInit {

  @Input() commentaire: Commentaire;

  commentaireEditForm: FormGroup;

  @Output() formStateEvent: EventEmitter<any> = new EventEmitter();
  constructor(private CommentairesService: CommentairesService) { }

  ngOnInit() {
    if (!this.commentaire) return;
    console.log(this.commentaire);
    this.commentaireEditForm = new FormGroup({
      contenu: new FormControl(this.commentaire.contenu, Validators.required)
    });
  }


  onSubmit() {
    this.CommentairesService.updateCommentaire(this.commentaire.id, this.commentaireEditForm.value)
    this.formStateEvent.emit();
    this.commentaireEditForm.reset();
  }

}
