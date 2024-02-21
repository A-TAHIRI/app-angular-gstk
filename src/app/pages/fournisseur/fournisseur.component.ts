import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

}
