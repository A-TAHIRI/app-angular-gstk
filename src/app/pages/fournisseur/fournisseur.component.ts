import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Fournisseur} from "../../models/fournisseur";
import {FournisseurService} from "../../services/fournisseur/fournisseur.service";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
   liste:Array<Fournisseur>= [];

  constructor(
    private router: Router,
    private  fournisseurService: FournisseurService

  ) { }

  ngOnInit(): void {
    this.fournisseurService.getAll().subscribe(data=>{
      this.liste=data;
    })
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

}
