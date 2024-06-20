import { Component } from '@angular/core';
import { Projet } from '../../../../Data_types/Projets_types';
import { ProjetsService } from '../../Services/projets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-projets-edit',
  templateUrl: './projets-edit.component.html',
  styleUrl: './projets-edit.component.css'
})
export class ProjetsEditComponent {

  projet?: Projet;
  id: number;

  constructor(private projetsService: ProjetsService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.projetsService.projets$.subscribe(
        projets => {
          this.projet = projets.find(projet => projet.id == this.id);
        }
      );
    });
  }

  projetEdit:FormGroup = new FormGroup({
    nom: new FormControl(this.projet?.nom),
  });

  onSubmit() {
    console.log(this.projetEdit.value);
    this.projetsService.updateProjet(this.id,this.projetEdit.value);
    this.router.navigate(['/Projets']);
  }

}
