import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { AuthRequestDto } from 'src/app/dto/auth-request';
import { Utilisateur } from 'src/app/models/utilisateur';
import {Router} from "@angular/router";
import {ChangerMotDePasseUtilisateurDto} from "../../dto/changer-mot-de-passe-utilisateur-dto";
import {AuthReponse} from "../../dto/auth-reponse";
import {UtilisateurDto} from "../../dto/utilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  readonly baseUrl = 'http://localhost:8082';

  constructor(
    private http: HttpClient,
    private  router:Router
  ) { }


  AjouterUtilisateur(utilisateur: Utilisateur): Observable<Object> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, utilisateur);
  }

  auth(authRequestDto: AuthRequestDto) {
    const url = `${this.baseUrl}/login`;
   return this.http.post<any>(url ,authRequestDto)

  }

  getUtilisateurByEmail( email  ?: string ):Observable<UtilisateurDto> {
    if (email !== undefined){
      const  base = "http://localhost:8082/api/v1/utilisateurs/email"
      const  url= `${base}/${email}`;
      console.log(url)
      return  this.http.get<UtilisateurDto>(url);
    } return of();
  }

  getAll():Observable<Utilisateur[]> {
    const  url= `${this.baseUrl}/api/v1/utilisateurs`;
    return this.http.get<Utilisateur[]>(url)
  }

  changerMotDePasse(changerMotDePasseDto: ChangerMotDePasseUtilisateurDto) {
    const url = ` ${this.baseUrl}/api/v1/utilisateurs/update/password`;
   return  this.http.post<any>(url,changerMotDePasseDto )
  }

/*
  setAccessTken(authReponse: any) {
    localStorage.setItem('accessToken', JSON.stringify(authReponse))
  }
  */

  setConnectedUser( utilisateur : Utilisateur ):void{
    localStorage.setItem('connectedUser', JSON.stringify(utilisateur));

  }

  getConnectedUser(): Utilisateur{
    if ( localStorage.getItem('connectedUser') ){
     return  JSON.parse(localStorage.getItem('connectedUser') as  string);
    }
      return {};

  }

  //Todo
  isUserLogedAndAccessTokenValide() :boolean{
    if (localStorage.getItem('accessToken')){
      //TODO il fout verifier si le acces token est valid
      return true;
    }
     this.router.navigate(['login']);
    return false;

  }
}
