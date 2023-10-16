import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[];



  constructor() { 
    this.produits = [
      {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
    ];
  }
  listeProduit():Produit[]{
     return this.produits;
  }
  ajouterProduit( prod : Produit){
    this.produits.push(prod);
    }
    supprimerProduit( prod: Produit){
      //supprimer le produit prod du tableau produits
      const index = this.produits.indexOf(prod, 0);
      if (index > -1) {
      this.produits.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
      }
      consulterProduit(id:number): Produit{
        return this.produits.find(p => p.idProduit == id)!;
        }
        updateProduit(p:Produit)
{
// console.log(p);
this.supprimerProduit(p);
this.ajouterProduit(p);
this.trierProduits();
}
trierProduits() {
  this.produits = this.produits.sort((n1, n2) => {
    if (n1.idProduit === undefined && n2.idProduit === undefined) {
      return 0; // Les deux sont indéfinis, pas de différence de tri.
    }
    if (n1.idProduit === undefined) {
      return -1; // n1 est indéfini, n2 est défini, donc n1 vient avant n2.
    }
    if (n2.idProduit === undefined) {
      return 1; // n2 est indéfini, n1 est défini, donc n2 vient avant n1.
    }
    return n1.idProduit - n2.idProduit; // Trie en fonction de l'idProduit.
  });
}
} 
