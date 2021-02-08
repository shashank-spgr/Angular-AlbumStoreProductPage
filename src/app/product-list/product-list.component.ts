import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  _productService: ProductService;

  constructor(_productService : ProductService) {
    this._productService = _productService;
  }

  ngOnInit() {
    this._productService.getProducts().subscribe((response) => this.products = response);
  }

}
