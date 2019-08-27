import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/model/productmodel';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/productinsidemodel';

@Component({
  selector: 'app-productidentification',
  templateUrl: './productidentification.component.html',
  styleUrls: ['./productidentification.component.scss']
})
export class ProductidentificationComponent {
  public code: number;
  public product: Product;

  constructor(route: ActivatedRoute,
              lienproductservice: ProductService) {
    this.code = route.snapshot.params.code;
    lienproductservice.getProducts(this.code).subscribe((res: ProductResponse ) => {
      this.product = res.product;
    });

  }
}
