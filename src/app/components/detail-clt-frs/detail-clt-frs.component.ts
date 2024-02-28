import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.css']
})
export class DetailCltFrsComponent  implements OnInit{

  @Input()
  origin = '';
  @Input()
  clientFournisseur : any= {};

  constructor(
    private  router: Router,
    private  activatedRouter : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    };

  /**
   * rout pour modifier client/fournisseur
   * @param id
   */
  modifierClientFournisseur():void {
    if (this.origin === 'client') {
      this.router.navigate(['nouveauclient', this.clientFournisseur.id])
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouveaufournisseur',this.clientFournisseur.id ])
    }
  }
}





