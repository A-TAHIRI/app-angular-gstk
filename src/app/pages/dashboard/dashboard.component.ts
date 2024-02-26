import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";
import {UtilisateurDto} from "../../dto/utilisateur-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   implements  OnInit {

  connectedUser: UtilisateurDto = {};
  constructor(
    private  utilisateurService : UtilisateurService,
    private  router: Router
  ) {
  }
  ngOnInit(): void {
    this.connectedUser=this.utilisateurService.getConnectedUser();
  }

  homepage(){
    this.router.navigate([''])
  }

}
