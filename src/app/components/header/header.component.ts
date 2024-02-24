import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";
import {UtilisateurDto} from "../../dto/utilisateur-dto";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectedUser: UtilisateurDto = {};
  constructor(
    private  utilisateurService: UtilisateurService

  ) {
  }
  ngOnInit(): void {
    this.connectedUser= this.utilisateurService.getConnectedUser()
  }

}
