import { Component, OnInit } from '@angular/core';

import { Product } from '../../../products/models/product.model';
import { ProductService } from './../../../products/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then(products => this.products = products);
  }

  changeProduct(product): void {
    this.productService.changeProduct(product);
  }

}
