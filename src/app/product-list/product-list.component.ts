import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  afficherPrix(prix) {
    window.alert('Le prix est de ' + prix + " €");
  }

  receptionNotification(seuil) {
    window.alert("Vous recevrez une notification quand le produit descendra a moins de " + seuil + " €");
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/