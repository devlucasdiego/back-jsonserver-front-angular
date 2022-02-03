import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "./../product.model";

@Component({
  selector: "app-products-read",
  templateUrl: "./products-read.component.html",
  styleUrls: ["./products-read.component.css"],
})
export class ProductsReadComponent implements OnInit {
  products: Product[] = [];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.read().subscribe((products) => {
      this.products = this.products;
      console.log(products);
    });
  }
}
