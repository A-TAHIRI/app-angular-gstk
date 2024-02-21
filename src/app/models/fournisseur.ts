import { CommandeFournisseur } from "./commande-fournisseur";

export interface Fournisseur {
   
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
        commandesFournisseurs?: Array<CommandeFournisseur>
    
}