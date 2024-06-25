import { Injectable } from '@angular/core';
import { Tache } from '../../../Data_types/Projets_types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormOverlayService {

  private formOverlaySubject = new BehaviorSubject<boolean>(false);
  formOverlayState$ = this.formOverlaySubject.asObservable();


  constructor() { }

  openFormOverlay() {
    this.formOverlaySubject.next(true);
  }

  closeFormOverlay() {
    this.formOverlaySubject.next(false);
  }



}
