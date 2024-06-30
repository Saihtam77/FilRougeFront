import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Commentaire } from '../../../Data_types/Projets_types';

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {
  private commentairesSubject = new BehaviorSubject<Commentaire[]>([]);
  commentaires$ = this.commentairesSubject.asObservable();

  private commentaireEventSubject = new Subject<void>();
  commentaireEvent$ = this.commentaireEventSubject.asObservable();
  
  url = "https://filrougeback.azurewebsites.net"; 
  
  constructor(private http: HttpClient) { }

  //Commentaire request


  getCommentaireByTacheId(tacheId: number) : Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.url}/commentaires/GetCommentsTaches/${tacheId}`);
  }

  deleteCommentaire(id: number) {
    this.http.delete(`${this.url}/commentaires/${id}`).subscribe(
      () => this.commentaireEventSubject.next()
    );
  }

  createCommentaire(commentaire: Commentaire) {
    this.http.post<Commentaire>(`${this.url}/commentaires`, commentaire).subscribe(
      () => this.commentaireEventSubject.next()
    );
  }

  updateCommentaire(id: number, commentaire: Commentaire) {
    this.http.put<Commentaire>(`${this.url}/commentaires/${id}`, commentaire).subscribe(
      () => this.commentaireEventSubject.next()
    );
  }
}
