import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequestDto } from 'src/app/dto/auth-request';
import { UtilisateurDto } from 'src/app/dto/utilisateur-dto';
import { Utilisateur } from 'src/app/models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  readonly baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }


  AjouterUtilisateur(utilisateur: Utilisateur): Observable<Object> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, utilisateur);
  }

  auth(authRequestDto: AuthRequestDto) {
    const url = `${this.baseUrl}/login`;
   return this.http.post<any>(url ,authRequestDto)
  
  }
}
