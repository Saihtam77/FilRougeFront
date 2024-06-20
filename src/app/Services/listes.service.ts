import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Liste } from '../../../Data_types/Projets_types';

@Injectable({
  providedIn: 'root'
})
export class ListesService {
  private listesSubject = new BehaviorSubject<Liste[]>([]);
  listes$ = this.listesSubject.asObservable();

  url = "http://localhost:5147";
  constructor(private http: HttpClient) { }

  getListes() {
    this.http.get<Liste[]>(`${this.url}/listes`).subscribe(
      listes => this.listesSubject.next(listes)
    );
    return this.listes$;
  }

  getListeById(id: number) {
    this.http.get<Liste>(`${this.url}/listes/${id}`).subscribe(
      liste => this.listesSubject.next([liste])
    );
    return this.listes$;
  }

  getListeByProjetId(projetId: number) {
    this.http.get<Liste[]>(`${this.url}/listes/GetListesByProjetId/${projetId}`).subscribe
      (listes => this.listesSubject.next(listes));
    return this.listes$;
  }

  deleteListe(id: number) {
    this.http.delete(`${this.url}/listes/${id}`).subscribe(
      () => this.getListes()
    );
  }

  createListe(liste: Liste) {
    this.http.post<Liste>(`${this.url}/listes`, liste).subscribe(
      () => this.getListes()
    );
  }

  updateListe(id: number, liste: Liste) {
    this.http.put<Liste>(`${this.url}/listes/${id}`, liste).subscribe(
      () => this.getListes()
    );
  }
}
