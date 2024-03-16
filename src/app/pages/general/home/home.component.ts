import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  customOptions: OwlOptions  = {

    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText : [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
      0:{
        items:1
      },
      576:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    }
  }

  customOptions2: OwlOptions  = {
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    loop: true,
    dots: true,
    nav: false,

  }

}
