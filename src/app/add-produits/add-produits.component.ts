import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
})
export class AddProduitsComponent implements OnInit {
  newProduit: Produit = new Produit();
  message : string;
  constructor(private produitService:ProduitService) {
    this.message = '';
  }

  ngOnInit() {
  }
  addProduit(){
    //console.log(this.newProduit);
      this.produitService.ajouterProduit(this.newProduit);
      this.message="produit"+ " "+this.newProduit.nomProduit +" "+ "ajouté avec succés";
    }
}
