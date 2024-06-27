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
  projetId: number;

  url = "https://filrougeback.azurewebsites.net";
  constructor(private http: HttpClient) { }


  getListeByProjetId(projetId: number): Observable<Liste[]> {
    this.http.get<Liste[]>(`${this.url}/listes/GetListesByProjetId/${projetId}`).subscribe(
      (listes) => {
        this.listesSubject.next(listes);
        this.projetId = projetId;
      }
    );
    return this.listes$;
  }

  getListeById(id: number) {
    return this.http.get<Liste>(`${this.url}/listes/${id}`);
  }

  
  deleteListe(id: number) {
    this.http.delete(`${this.url}/listes/${id}`).subscribe(
      ()=>this.getListeByProjetId(this.projetId)
    )
  }

  createListe(liste: Liste) {
    this.http.post<Liste>(`${this.url}/listes`, liste).subscribe(
      ()=>this.getListeByProjetId(this.projetId)
    )
  }

  updateListe(id: number, liste: Liste) {
    this.http.put<Liste>(`${this.url}/listes/${id}`, liste).subscribe(
      ()=>this.getListeByProjetId(this.projetId)
    )
  }
}
