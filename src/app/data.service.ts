import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  capteurs;
  produits;
  constructor(private http: HttpClient) { }
   // methodes service du produit
  public getProduits(): Observable<any> {

    if (this.produits != null) {
      console.log(this.produits);
      return this.produits ;          // Observable.of(this.categories)     problem import 'of'
    } else {
      this.produits = this.http.get(`http://localhost:8080/getAllProducts`);
      return this.produits;
    }
  }
  public addProduit( nom: string , quantite: string ) {
    return this.http.post('http://localhost:8080/AddProduit', {
      produitNom: nom,
      produitQuantite: quantite
    });
  }
  public deleteProduit(id: number) {
    return this.http.delete('http://localhost:8080/DeleteProduit?produitId=' + id);
  }
  // methodes service du capteur
  public getCapteurs(): Observable<any> {

    if (this.capteurs != null) {
      console.log(this.capteurs);
      return this.capteurs ;          // Observable.of(this.categories)     problem import 'of'
    } else {
      this.capteurs = this.http.get(`http://localhost:8080/getAllCapteurs`);
      return this.capteurs;
    }
  }
  public addCapteur( nom: string ) {
    return this.http.post('http://localhost:8080/AddCapteur', {
      capteurNom: nom,
    });
  }
  public deleteCapteur(id: number) {
    return this.http.delete('http://localhost:8080/DeleteCapteur?capteurId=' + id);
  }
}
