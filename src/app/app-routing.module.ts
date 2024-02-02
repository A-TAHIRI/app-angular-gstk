import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
