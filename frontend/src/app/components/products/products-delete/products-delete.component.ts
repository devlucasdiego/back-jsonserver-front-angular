import { Product } from "./../product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./products-delete.component.html",
  styleUrls: ["./products-delete.component.css"],
})
export class ProductsDeleteComponent implements OnInit {
  product: Product = {
    id: 0,
    name: "",
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.productService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  deleteProduct(): void {
    if (this.product.id) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage("Produto excluído com sucesso!");
        this.router.navigate(["/products"]);
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
