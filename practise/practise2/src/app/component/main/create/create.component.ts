import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { product } from "src/app/models/product";
import { ConsignmentService } from "src/app/services/consignment/consignment.service";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  consignmentForm: FormGroup;
  products: Array<product> = [];

  constructor(
    private productService: ProductService,
    private consignmentService: ConsignmentService,
    private router: Router
  ) {
    this.consignmentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      importDate: new FormControl('', [Validators.required]),
      exportDate: new FormControl('', [Validators.required]),
      tax: new FormControl('', [Validators.required]),
    });

    this.productService.getAllProduct().subscribe(value => {
        console.log(value);
        this.products = value;
      },
      error => {
        console.log("Not found list products!");
      }
    );
  }

  ngOnInit(): void {}

  parseDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  save(): void {
    console.log(this.consignmentForm);
    const consingment = this.consignmentForm.value;
    consingment.importDate = this.parseDate(consingment.importDate);
    consingment.exportDate = this.parseDate(consingment.exportDate);
    this.consignmentService.addNewConsignment(consingment).subscribe(value => {
        // this.consignmentForm.reset();
        console.log('success full adding!');
        
        // this.router.navigateByUrl('').then(success => {

        //     this.consignmentForm.reset();
        // })
    });
  }
}
