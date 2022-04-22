import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: product[] = []
  product: product = {
    id: '',
    model: '',
    category: '',
    name: '',
    release_date: '',
    price: 0,
    stock: 0,
    description: '',

  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.fetchProducts().subscribe((products) => this.products = products)
  }

  fetchDetails(productDetail: product) {
    this.product = productDetail
  }
}