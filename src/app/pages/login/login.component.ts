import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequestDto } from 'src/app/dto/auth-request';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequestDto : AuthRequestDto = {};
  errorMessage = '';

  constructor(
     private router: Router,
     private utilisateurService: UtilisateurService
     
     ) { }

  ngOnInit(): void {  
  }


  login(){
    this.utilisateurService.auth(this.authRequestDto).subscribe(
      (data: any) => {
       console.log(data)
       // Stockage du jeton d'accès dans le stockage local (localStorage)
       localStorage.setItem('access_token', data.token);
       this.router.navigate(['']);
      },
      (error) => {
        this.errorMessage = 'Email ou mot de passe invalide';
        this.router.navigate(['login']);
      }
    );
  }

}
