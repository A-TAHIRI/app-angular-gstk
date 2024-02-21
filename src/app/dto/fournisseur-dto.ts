import { CommandeFournisseurDto } from "./commande-fournisseur-dto";

export interface FournisseurDto {
   
        id?: number,
        creationDate?: number,
        lastModifiedDate?: number,
        nom?: string,
        prenom?: string,
        adresse?: string,
        photo?: string,
        mail?: string,
        numTel?: string,
        idEntreprise?: number,
        commandesFournisseurs?: Array<CommandeFournisseurDto>
  
}