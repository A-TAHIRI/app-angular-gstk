import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent  implements OnInit {

  @Input()
  article : Article = {};

  constructor(
   private router: Router,
   private articleService: ArticleService

  ) { }

  ngOnInit(): void {
  }

}
