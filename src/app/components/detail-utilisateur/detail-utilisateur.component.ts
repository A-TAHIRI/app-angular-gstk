import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";
import {Router} from "@angular/router";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent  implements OnInit {

  @Input()
  utilisateur : Utilisateur ={};
  constructor(
    private  router: Router,
  ) {
  }
  ngOnInit(): void {
  }

}
