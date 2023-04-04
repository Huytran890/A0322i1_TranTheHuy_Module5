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
  public consignmentForm: FormGroup;
  public products: Array<product> = [];

  constructor(
    private productService: ProductService,
    private consignmentService: ConsignmentService,
    private router: Router
  ) {
    this.consignmentForm = new FormGroup({
      id: new FormControl(),
      idConsignment: new FormControl('', [Validators.required, Validators.pattern('^LH-[0-9]{4}$')]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      tax: new FormControl('', [
        Validators.required, 
        Validators.pattern('^(?:[1-2]\d|\d{1,2}|%|[1-2]\d?%)|(\d{2}\.\d{1,2}%)|(30%)$')
      ]),
      importDate: new FormControl('', [
        Validators.required,
        // this.validateImportDate
      ]),
      exportDate: new FormControl('', [
        Validators.required,
        // this.validateExportDate,
        // this.validateDateRange,
      ]),
      product: new FormControl('', [Validators.required]),
    });

    this.productService.getAllProduct().subscribe(
      (next) => {
        console.log(next);
        this.products = next;
      },
      (error) => {
        console.log("Not found list products!");
      },
      () => {}
    );
  };

  // Custom validator for import date
  // validateImportDate(control: FormControl) {
  //   const inputDate = new Date(control.value).getTime();
  //   const today = new Date();
  //   if (inputDate < today.getTime()) {
  //     return { invalidDate: true };
  //   }
  //   return null;
  // };

  // Custom validator for export date
  // validateExportDate(control: FormControl) {
  //   const inputDate = new Date(control.value);
  //   const today = new Date();
  //   if (inputDate < today) {
  //     return { invalidDate: true };
  //   }
  //   return null;
  // };

  // Custom validator for export date must be rather than import date 1 date.
  // validateDateRange(formGroup: FormGroup) {
  //   const importDate = new Date(formGroup.get("importDate").value).getTime();
  //   const exportDate = new Date(formGroup.get("exportDate").value).getTime();
  //   const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  //   if (exportDate < importDate || (exportDate - importDate) / oneDay < 1) {
  //     formGroup.get("exportDate").setErrors({ invalidDateRange: true });
  //   } else {
  //     formGroup.get("exportDate").setErrors(null);
  //   }
  //   return null;
  // };

  ngOnInit(): void {};

  parseDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  save(): void {
    console.log(this.consignmentForm);
    if (this.consignmentForm.valid) {
      const consignment = this.consignmentForm.value;
      consignment.importDate = this.parseDate(consignment.importDate);
      consignment.exportDate = this.parseDate(consignment.exportDate);
      this.consignmentService
        .addNewConsignment(consignment)
        .subscribe((value) => {
          console.log("Success Adding!");
          this.router.navigateByUrl("/list").then((success) => {
            this.consignmentForm.reset();
          });
        });
    }
  };
}
