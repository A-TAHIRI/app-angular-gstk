import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Utilisateur} from "../../models/utilisateur";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  liste ! : Utilisateur[];
  errorMsg ='';

  constructor(
    private router: Router,
    private  utilisateurService: UtilisateurService
  ) { }

  ngOnInit(): void {
  this.tousUtilisateurs()
  }

  nouvelUtilisateur(): void {
    this.router.navigate(['nouvelutilisateur']);
  }

  tousUtilisateurs(){
    this.utilisateurService.getAll().subscribe((data)=>{
      this.liste= data;
    },(error)=>{
      this.errorMsg=error.error.errors
    })
  }

}
