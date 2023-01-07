import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '@models/product';
import { ProductService } from '@services/product/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  public products: Product[] = [];
  constructor(private productService: ProductService) { }

  // public getProducts(): void {
  //   this.productService.getAllProducts().subscribe(
  //     (response: Product[]) => {
  //       this.products = response;
  //       console.log(response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       console.log(error.message);
  //     }
  //   );
  // }

  ngOnInit(): void {
    console.log("product module");
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message);
      }
    );
  }
}
