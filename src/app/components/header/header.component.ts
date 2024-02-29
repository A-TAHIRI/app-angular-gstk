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
  imgUrl : string | ArrayBuffer ='assets/image/user.png';
  constructor(
    private  utilisateurService: UtilisateurService

  ) {
  }
  ngOnInit(): void {
    this.connectedUser = this.utilisateurService.getConnectedUser()
    if (this.connectedUser.photo !== null){
      this.imgUrl= 'http://localhost:8082/file/image/'+this.connectedUser.photo;
    }else{
      this.imgUrl= 'assets/image/user.png';
    }
  }

}
