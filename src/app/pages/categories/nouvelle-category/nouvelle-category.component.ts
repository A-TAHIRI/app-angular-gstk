import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategorieService} from "../../../services/categorie/categorie.service";
import {Categorie} from "../../../models/categirie";
import {CategorieDto} from "../../../dto/categorie-dto";

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrls: ['./nouvelle-category.component.css']
})
export class NouvelleCategoryComponent implements OnInit {
 categorie: CategorieDto= {};
  errorsMsg: Array<string>= [];

  constructor(
    private router: Router,
    private categorieService: CategorieService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }

  save(){
   this.categorieService.ajouterCategorie(this.categorie).subscribe((data)=>{
       console.log(data);
       this.router.navigate(['']);
   },
     err =>{
     this.errorsMsg = err.error.errors;
     this.router.navigate(['nouvellecategorie']);
     }

   );
  }

}
