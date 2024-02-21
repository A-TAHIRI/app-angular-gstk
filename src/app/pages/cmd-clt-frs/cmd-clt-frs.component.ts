import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cmd-clt-frs',
  templateUrl: './cmd-clt-frs.component.html',
  styleUrls: ['./cmd-clt-frs.component.css']
})
export class CmdCltFrsComponent  implements OnInit {

  origin = '';

  constructor(
     private router: Router,
     private activatedRoute: ActivatedRoute,
    
    
    ) { }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }


  nouvelleCommande():void{

    if (this.origin === 'client') {
      this.router.navigate(['nouvellecommandeclt']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouvellecommandefrs']);
    }
    
  }
}
