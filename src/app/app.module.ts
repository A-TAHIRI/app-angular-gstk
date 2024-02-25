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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './pages/article/article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { BouttonActionComponent } from './components/boutton-action/boutton-action.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NouvelArticleComponent } from './pages/article/nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './pages/mvtstk/mvtstk.component';
import { DetailMvtStkArticleComponent } from './components/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './components/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './components/detail-clt-frs/detail-clt-frs.component';
import { ClientComponent } from './pages/client/client.component';
import { FournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { CmdCltFrsComponent } from './pages/cmd-clt-frs/cmd-clt-frs.component';
import { DetailUtilisateurComponent } from './components/detail-utilisateur/detail-utilisateur.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';
import { DetailCmdCltFrsComponent } from './components/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './components/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import {HttpInterceptorService} from "./services/interceptor/http-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    UcfirstPipe,
    LoginComponent,
    InscriptionComponent,
    DashboardComponent,
    StatistiquesComponent,
    MenuComponent,
    LoaderComponent,
    HeaderComponent,
    ArticleComponent,
    DetailArticleComponent,
    BouttonActionComponent,
    PaginationComponent,
    NouvelArticleComponent,
    MvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    ClientComponent,
    FournisseurComponent,
    ProfilComponent,
    UtilisateurComponent,
    CmdCltFrsComponent,
    DetailUtilisateurComponent,
    DetailCmdComponent,
    DetailCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    NouveauCltFrsComponent,
    CategoriesComponent,
    NouvelleCategoryComponent,
    NouvelUtilisateurComponent,
    ChangerMotDePasseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr_FR'},
    {   provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})

export class AppModule
{
  constructor() {
    registerLocaleData(fr.default)
  }
}
