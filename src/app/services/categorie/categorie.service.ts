import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorieDto } from 'src/app/dto/categorie-dto';
import { Categorie } from 'src/app/models/categirie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  readonly baseUrl = 'http://localhost:8082/api/v1/categories';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer un article 
  getCategorie(id: number): Observable<Object> {
    const url =  this.baseUrl+`/${id}`;
    return this.http.get(url);
  }

  // Méthode pour ajouter un article
  ajouterCategorie(categirie: Categorie): Observable<Object> {
    const url =  this.baseUrl;
    return this.http.post(url, categirie);
  }

  // Méthode pour mettre à jour un article
  mettreAJourCategorie(id: number, categirie: any): Observable<any> {
    const url =  this.baseUrl+`/${id}`;
    return this.http.put(url, categirie);
  }

  // Méthode pour supprimer un article
  supprimerCategorie(id: number): Observable<Object> {
    const url =  this.baseUrl+`/${id}`;
    return this.http.delete(url);
  }

  // Méthode pour récupérer toutes les articles
  getToutesCategories(): Observable<Object> {
    const url =  this.baseUrl;
    return this.http.get(url);
  }
}
