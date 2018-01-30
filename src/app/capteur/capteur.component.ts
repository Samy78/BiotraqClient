import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-capteur',
  templateUrl: './capteur.component.html',
  styleUrls: ['./capteur.component.css']
})
export class CapteurComponent implements OnInit {
  capteurs;
  nom;
  constructor(private dataService: DataService , private router: Router) { }

  ngOnInit() {
    this.getCapteurs();
  }
  getCapteurs() {
    this.dataService.getCapteurs().subscribe(data => {
      this.capteurs = data;
    });
  }
  addCapteur() {
    this.dataService.addCapteur(this.nom ).subscribe(capteur => {
      this.capteurs.push(capteur);
      console.log('capteur nom=' + this.nom +  ' added');
    });
  }
  deleteCapteur(id: number ) {
    this.dataService.deleteCapteur(id).subscribe(   data => {
      // refresh the list
      console.log('product id=' + id + ' deleted');
      this.getCapteurs();
      return true;
    });
  }
}
