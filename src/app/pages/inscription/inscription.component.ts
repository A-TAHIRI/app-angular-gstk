import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from 'src/app/models/adresse';
import { Entreprise } from 'src/app/models/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import {AuthRequestDto} from "../../dto/auth-request";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";

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
    private entrepriseService: EntrepriseService,
    private utilisateurService : UtilisateurService
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['']);
  }

  save() {
    this.entreprise.adresse = this.adresse;
    this.entrepriseService.add(this.entreprise).subscribe(
      (data) => {
        this.conectEntreprise()
      },
      (error) => {
        this.errorsMsg = error.error.errors;
      this.router.navigate(['inscription']);
      }
    );
  }


  conectEntreprise():void{
    const authRequestDto: AuthRequestDto = {
      email: this.entreprise.email,
      mdp: 'som3R@nd0mP@$$word'
    };
    this.utilisateurService.auth(authRequestDto).subscribe((res)=>{
      this.utilisateurService.setConnectedUser(authRequestDto);
      localStorage.setItem('accessToken',  JSON.stringify(res.token) );
      localStorage.setItem('origin', 'inscription');
      this.router.navigate(['changermotdepasse']);
    });
  }
}
