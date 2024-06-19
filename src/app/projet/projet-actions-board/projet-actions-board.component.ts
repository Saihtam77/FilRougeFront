import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-actions-board',
  templateUrl: './projet-actions-board.component.html',
  styleUrl: './projet-actions-board.component.css'
})
export class ProjetActionsBoardComponent {

  listeForm:boolean = false;
  projetId: number;
  constructor(private route: ActivatedRoute,) {
    this.projetId = Number(this.route.snapshot.params['id']);
  }

  DisplayForm() {
    this.listeForm = !this.listeForm;
    console.log(this.listeForm);
  }

}
