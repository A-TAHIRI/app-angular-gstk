import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ArticleDto } from 'src/app/dto/article-dto';
import { Article } from 'src/app/models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {


readonly baseUrl = 'http://localhost:8082/api/v1/articles';

  constructor(private http: HttpClient

    ) { }

  // Méthode pour récupérer un article
  getArticle(id: number): Observable<ArticleDto> {
    const url =  this.baseUrl+`/${id}`;
    return this.http.get(url);
  }

  // Méthode pour ajouter un article
  ajouterArticle(article: Article): Observable<Article> {
    const url=this.baseUrl;
    return this.http.post(url, article);
  }

  // Méthode pour mettre à jour un article
  mettreAJourArticle(id: number, article: Article): Observable<ArticleDto> {
    const url =  this.baseUrl+`/${id}`;
    return this.http.put(url, article);
  }

  // Méthode pour supprimer un article
  supprimerArticle(id: number): Observable<ArticleDto> {
    const url =  this.baseUrl+`/${id}`;
    return this.http.delete(url);
  }

  // Méthode pour récupérer toutes les articles
  getToutesArticles():  Observable<ArticleDto[]> {
    const url =  this.baseUrl;
    console.log(url);

    return this.http.get<ArticleDto[]>(url);
  }



}
