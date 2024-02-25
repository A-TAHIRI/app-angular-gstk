import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";
import {UtilisateurDto} from "../../dto/utilisateur-dto";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  utilisateur: UtilisateurDto={};

  constructor(
    private router: Router,
    private utilsateurService : UtilisateurService
  ) { }

  ngOnInit(): void {
    this.utilisateur = this.utilsateurService.getConnectedUser();
  }
  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }

}
