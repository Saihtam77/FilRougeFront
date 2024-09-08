import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Tache } from '../../../Data_types/Projets_types';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  private tachesSubject = new BehaviorSubject<Tache[]>([]);
  taches$ = this.tachesSubject.asObservable();

  

  private tacheEventSubject = new Subject<void>();
  tacheEvent$ = this.tacheEventSubject.asObservable();


  listeId: number;

  url = "http://localhost:5147";

  constructor(private http: HttpClient) { }



  getTacheById(id: number) {
    
    this.http.get<Tache>(`${this.url}/Taches/${id}`).subscribe(
      tache => this.tachesSubject.next([tache])
    );
    return this.taches$;
  }

  getTacheByListeId(listeId: number): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.url}/Taches/GetTachesListes/${listeId}`)
  }

  deleteTache(id: number) {
    this.http.delete(`${this.url}/Taches/${id}`).subscribe(
      () => this.getTacheById(this.listeId)
    );
  }

  createTache(tache: Tache) {
    this.http.post<Tache>(`${this.url}/Taches`, tache).subscribe(
      () => this.tacheEventSubject.next()
    );

  }

  updateTache(id: number, tache: Tache) {
    this.http.put<Tache>(`${this.url}/Taches/${id}`, tache).subscribe(
      () => this.tacheEventSubject.next()
    );
  }


}
