import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categirie';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css'],
})
export class NouvelArticleComponent implements OnInit {

  article:Article = {};
  listeCategorie: Array<Categorie> = [];
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.categorieService.getToutesCategories()
    .subscribe(categories => {
    
    });
  }

  cancel(): void {
    this.router.navigate(['articles']);
  }

  save(article: any): void {
    this.articleService.ajouterArticle(article).subscribe(() => {
      this.router.navigate(['articles']);
    });
  }
}
