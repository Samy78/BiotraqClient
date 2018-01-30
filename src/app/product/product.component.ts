import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  produits;
  nom;
  quantite;
  constructor(private dataService: DataService , private router: Router) { }

  ngOnInit() {
  this.getProduits();
  }
  getProduits() {
    this.dataService.getProduits().subscribe(data => {
      this.produits = data;
    });
  }
  addProduit() {
    this.dataService.addProduit(this.nom, this.quantite ).subscribe(produit => {
      this.produits.push(produit);
      console.log('product nom=' + this.nom + ' , quantite=' + this.quantite + ' added');
    });
  }
  deleteProduit(id: number ) {
    this.dataService.deleteProduit(id).subscribe(   data => {
      // refresh the list
      console.log('product id=' + id + ' deleted');
      this.getProduits();
      return true;
    });
  }
}
