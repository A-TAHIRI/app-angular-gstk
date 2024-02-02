import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import * as fr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    UcfirstPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr_FR'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule
{
  constructor() {
    registerLocaleData(fr.default)
  }
}
