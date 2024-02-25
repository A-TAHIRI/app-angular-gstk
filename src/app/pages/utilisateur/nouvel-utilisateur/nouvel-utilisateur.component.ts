import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurDto } from 'src/app/dto/utilisateur-dto';
import { Adresse } from 'src/app/models/adresse';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import {FileUploadService} from "../../../services/upload/file-upload.service";

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.css'],
})
export class NouvelUtilisateurComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur();
  adresse: Adresse = {};
  errorsMsg: Array<string> = [];
  pathFile = '';

  constructor(
    private router: Router,
    private utilisateurService: UtilisateurService,
    private fileUploadService: FileUploadService
  ) {

  }

  ngOnInit(): void {

  }

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }

  save() {
    this.utilisateur.adresse = this.adresse;
    this.utilisateurService
      .AjouterUtilisateur(this.utilisateur)
      .subscribe((data) => {
          console.log(data);
          this.router.navigate(['utilisateurs']);
        }, (err) => {
          this.errorsMsg = err.error.errors;
        }
      );
  }
  onFileSelected(event:any){
    const file: File = event.target.files[0];
    this.fileUploadService.uploadFile(file).subscribe(
      (res : any) => {
        this.pathFile=res.pathFile;
        this.utilisateur.photo = res.pathFile;
        console.log('File uploaded success');

      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );


  }
}
