import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjetsService } from '../../Services/projets.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projets-create',
  templateUrl: './projets-create.component.html',
  styleUrl: './projets-create.component.css'
})
export class ProjetsCreateComponent {

  projet: FormGroup = new FormGroup({
    nom: new FormControl(''),
  });

  constructor(private projetsService: ProjetsService, private router: Router) {
  
  }

 
  onSubmit() {
    console.log(this.projet.value);
    this.projetsService.createProjet(this.projet.value);
    //redirection 
    this.router.navigate(['/Projets']);
  }

}
