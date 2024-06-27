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

  private tacheCreee = new Subject<void>();
  tacheCreee$ = this.tacheCreee.asObservable();


  listeId: number;

  url = "http://localhost:5147";

  constructor(private http: HttpClient) { }



  getTacheById(id: number) {
    
    this.http.get<Tache>(`${this.url}/taches/${id}`).subscribe(
      tache => this.tachesSubject.next([tache])
    );
    return this.taches$;
  }

  getTacheByListeId(listeId: number): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.url}/taches/GetTachesByListeId/${listeId}`)
  }

  deleteTache(id: number) {
    this.http.delete(`${this.url}/taches/${id}`).subscribe(
      () => this.getTacheById(this.listeId)
    );
  }

  createTache(tache: Tache) {
    this.http.post<Tache>(`${this.url}/taches`, tache).subscribe(
      () => this.tacheCreee.next()
    );

  }

  updateTache(id: number, tache: Tache) {
    this.http.put<Tache>(`${this.url}/taches/${id}`, tache).subscribe(
      () => this.getTacheByListeId(this.listeId)
    );
  }


}
