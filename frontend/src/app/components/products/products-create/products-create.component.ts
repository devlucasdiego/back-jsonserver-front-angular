import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-products-create",
  templateUrl: "./products-create.component.html",
  styleUrls: ["./products-create.component.css"],
})
export class ProductsCreateComponent implements OnInit {
  product: Product = {
    name: "Produto de Teste",
    price: 125.98,
  };

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
