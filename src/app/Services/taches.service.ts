import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tache } from '../../../Data_types/Projets_types';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  private tachesSubject = new BehaviorSubject<Tache[]>([]);
  taches$ = this.tachesSubject.asObservable();
  
  url = 'http://localhost:5147';
  constructor(private http: HttpClient) { }

  getTaches() {
    this.http.get<Tache[]>(`${this.url}/taches`).subscribe(
      taches => this.tachesSubject.next(taches)
    );
  }

  getTacheById(id: number) {
    return this.http.get<Tache>(`${this.url}/taches/${id}`);
  }

  deleteTache(id: number) {
    this.http.delete(`${this.url}/taches/${id}`).subscribe(
      () => this.getTaches()
    );
  }

  createTache(tache: Tache) {
    this.http.post<Tache>(`${this.url}/taches`, tache).subscribe(
      () => this.getTaches()
    );
  }

  updateTache(id: number, tache: Tache) {
    this.http.put<Tache>(`${this.url}/taches/${id}`, tache).subscribe(
      () => this.getTaches()
    );
  }

  
}
