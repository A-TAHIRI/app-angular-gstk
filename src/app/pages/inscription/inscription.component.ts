import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from 'src/app/models/adresse';
import { Entreprise } from 'src/app/models/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  entreprise: Entreprise = {};
  adresse: Adresse = {};
  errorsMsg: Array<string> = [];

  constructor(
    private router: Router,
    private entrepriseService: EntrepriseService
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['']);
  }

  save() {
    this.entreprise.adresse = this.adresse;
    this.entrepriseService.add(this.entreprise).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['']);
      },
      (error) => {
        this.errorsMsg = error.error.errors;
      this.router.navigate(['inscription']);
      }
    );
  }
}
