import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CapteurComponent} from './capteur/capteur.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  { path: '', component: CapteurComponent, pathMatch: 'full' },
  { path: 'capteurs', component: CapteurComponent, pathMatch: 'full' },
  { path: 'produits',  component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
