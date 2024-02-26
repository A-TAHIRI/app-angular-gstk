import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { NouvelArticleComponent } from './pages/article/nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './pages/mvtstk/mvtstk.component';
import { ClientComponent } from './pages/client/client.component';
import { FournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { CmdCltFrsComponent } from './pages/cmd-clt-frs/cmd-clt-frs.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { ArticleComponent } from './pages/article/article.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inscrire', component: InscriptionComponent},
  {path: '', component: DashboardComponent,
    canActivate: [ApplicationGuardService],
  children:[
    {path: 'statistiques', component: StatistiquesComponent,
    canActivate: [ApplicationGuardService]},
    {path: 'articles', component: ArticleComponent,
    canActivate: [ApplicationGuardService]},
    {path: 'nouvelarticle', component: NouvelArticleComponent,
    canActivate: [ApplicationGuardService]},
    {path: 'mvtstk', component: MvtstkComponent,
    canActivate: [ApplicationGuardService]},
    {path:'clients', component: ClientComponent,
    canActivate: [ApplicationGuardService]},
    {path: 'nouveauclient', component: NouveauCltFrsComponent,
    canActivate: [ApplicationGuardService],
    data: {
      origin: 'client'
    }},
    {path: 'commandesclient', component: CmdCltFrsComponent,
    canActivate: [ApplicationGuardService],
    data: {
      origin: 'client'
    }},
    {path: 'nouvellecommandeclt', component: NouveauCltFrsComponent,
    canActivate: [ApplicationGuardService],
    data: {
      origin: 'client'
    }},
    {path:'fournisseurs', component: FournisseurComponent},
    {path:'commandesfournisseur', component: CmdCltFrsComponent ,
    canActivate: [ApplicationGuardService],
    data: {
      origin: 'fournisseur'
    }},
    {path: 'nouveaufournisseur', component: NouveauCltFrsComponent,
    canActivate: [ApplicationGuardService],
    data: {
      origin: 'fournisseur'
    }},
    {path: 'nouvellecommandefrs', component: NouveauCltFrsComponent,
    canActivate: [ApplicationGuardService],
      data: {
      origin: 'fournisseur'
    }},
    {path:'categories', component: CategoriesComponent,
    canActivate: [ApplicationGuardService],

     },
    {path:'nouvellecategorie', component: NouvelleCategoryComponent,
    canActivate: [ApplicationGuardService]},

    {path:'nouvellecategorie/:idCategorie', component: NouvelleCategoryComponent,
      canActivate: [ApplicationGuardService]},

    {path:'utilisateurs', component: UtilisateurComponent,
    canActivate: [ApplicationGuardService]},

    {path:'nouvelutilisateur', component: NouvelUtilisateurComponent,
      canActivate: [ApplicationGuardService]
    },
    {path:'nouvelutilisateur/:idUtilisateur', component: NouvelUtilisateurComponent,
      canActivate: [ApplicationGuardService]
    },

    {path:'profil', component: ProfilComponent,
      canActivate: [ApplicationGuardService]
    },

    {path:'changermotdepasse' , component: ChangerMotDePasseComponent,
    canActivate: [ApplicationGuardService]},
  ]

},
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
