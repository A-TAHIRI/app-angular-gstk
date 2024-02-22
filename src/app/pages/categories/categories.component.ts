import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategorieService} from "../../services/categorie/categorie.service";
import {Categorie} from "../../models/categirie";
import {CategorieDto} from "../../dto/categorie-dto";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  liste !: CategorieDto[];
  errorsMsg:Array<string>=[];

  constructor(
    private router: Router,
   private  categorieService: CategorieService
  ) { }

  ngOnInit(): void {
  }
  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategorie']);
  }


  getAll(){
    this.categorieService.getToutesCategories().subscribe((data) =>{
      console.log(data)
      this.liste=data
    },(error)=>{
      this.errorsMsg=error.error.errors
      }
    )

  }

}
