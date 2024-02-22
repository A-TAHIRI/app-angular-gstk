import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from 'src/app/dto/article-dto';



import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 liste !:  ArticleDto[];
  errorsMsg: Array<string> = [];
  constructor(
    private router: Router,
    private articleService: ArticleService

    ) {  ;
  };
  ngOnInit(): void {
    console.log(this.liste);
    this.articles();
  }



  nouvelArticle(): void {
    this.router.navigate(['nouvelarticle']);
  }

  cancel(): void {
    this.router.navigate(['articles']);
  }

   private articles() {
     this.articleService.getToutesArticles().subscribe((data)=> {
         this.liste = data;
       }
       )
    }



}
