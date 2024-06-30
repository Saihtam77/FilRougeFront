import { Component, Input } from '@angular/core';
import { Commentaire } from '../../../../Data_types/Projets_types';
import { CommentairesService } from '../../Services/commentaires.service';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-commentaire-create',
  templateUrl: './commentaire-create.component.html',
  styleUrl: './commentaire-create.component.css'
})
export class CommentaireCreateComponent {
  
  @Input() tacheId: number;
  
  commentaireCreateForm:FormGroup;

  formstate:boolean=false;

  constructor(private CommentairesService:CommentairesService) {}
  
  ngOnInit() {
    if (!this.tacheId) return;
    
    this.commentaireCreateForm=new FormGroup({
      contenu: new FormControl('', Validators.required),
      tacheId: new FormControl(this.tacheId)
    });
  
  }

  onCreate(){
    this.formstate=true;
  }

  onCancel(){
    this.formstate=false;
  }
  
  onSubmit(){
    this.CommentairesService.createCommentaire(this.commentaireCreateForm.value);
    this.commentaireCreateForm.reset();
  }

}
