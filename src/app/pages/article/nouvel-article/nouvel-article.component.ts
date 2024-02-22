import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categirie';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import {FileUploadService} from "../../../services/upload/file-upload.service";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css'],
})
export class NouvelArticleComponent implements OnInit {

  article:Article = {};
  categorie:Categorie={};
  liste :Array<Categorie>=[];
  errorsMsg:Array<string>=[];
  pathFile:any ;
  playImage ='';
  url: any;
  loading:boolean=false;
  protected readonly event = event;
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private categorieService: CategorieService,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {
    this.categorieService.getToutesCategories()
    .subscribe(data => {
      this.liste=data;
    });

  }

  cancel(): void {
    this.router.navigate(['articles']);
  }

  save(){

    this.article.categorie=this.categorie;
    this.articleService.ajouterArticle(this.article).subscribe(() => {
      this.router.navigate(['articles']);
    },
      error => {
      this.errorsMsg=error.error.errors
      }
    );
  }

 onFileSelected(event:any){
   const file: File = event.target.files[0];
   this.fileUploadService.uploadFile(file).subscribe(
     (res : any) => {
       this.pathFile=res;
       console.log('File uploaded success');
       this.afficherImage();
     },
     (error) => {
       console.error('Error uploading file:', error);
     }
   );


 }


// Méthode pour afficher l'image ou démarrer le téléchargement
afficherImage(){
    this.fileUploadService.displayFile(this.pathFile).subscribe(
      (response) => {
        this.playImage=response
      });
  }






}
