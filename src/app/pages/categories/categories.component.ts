import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategorieService} from "../../services/categorie/categorie.service";
import {Categorie} from "../../models/categirie";
import {CategorieDto} from "../../dto/categorie-dto";
// @ts-ignore
//import {Lobibox} from  'lobibox';
//import 'lobibox';






@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  liste !: CategorieDto[];
  errorsMsg:Array<string>=[];
  selectedCatIdToDelete?  = -1;

  constructor(
    private router: Router,
   private  categorieService: CategorieService,
   // private lobibox : Lobibox,


  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  /**
   * ajouter une categorie à bdd
   */
  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategorie']);
  }

  /**
   * récupére toutes les categories
   */
  getAll(){
    this.categorieService.getToutesCategories().subscribe((data) =>{
      console.log(data)
      this.liste=data
    },(error)=>{

            this.errorsMsg=error.error.errors
      }
    )
  }

  /**
   * Route pour recupiré la categourie et la modifier
   * @param id
   */
  modifierCategoie(id : number | undefined ):void{
    this.router.navigate(['nouvellecategorie', id])

  }

  /**
   * selectioner la categorie à supprimer
   * @param id
   */
  selectCatPourSupprimer(id? : number){
    this.selectedCatIdToDelete= id;
  }

  /**
   * anuler la supprission
   */
  annulerSuppressionCat(){
    this.selectedCatIdToDelete= -1;
  }

  /**
   * confirmer la suppristion d'une categorie
   */
  confirmerEtSupprimerCat(){
    if (this.selectedCatIdToDelete !== -1){
      this.categorieService.supprimerCategorie(this.selectedCatIdToDelete).subscribe(res=>{
       this.getAll();
      },
        error=>{
    //lobibox.notify("error",{msg:error.error.message,sound:true,icon:false})
           this.errorsMsg= error.error.message;
        });
    }

  }

}
