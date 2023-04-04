import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
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
        Validators.pattern('^(?!-)([1-9]|[1-2][0-9]|30)%$'),
      ]),
      importDate: new FormControl('', [
        Validators.required,
        this.validateImportDate
      ]),
      exportDate: new FormControl('', [
        Validators.required,
        // this.validateExportDate,
        validateExportDate
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
  validateImportDate(control: FormControl) {
    const inputDate = new Date(control.value).getTime();
    const today = new Date().setHours(0, 0, 0, 0);
    if (inputDate < today) {
      return { invalidDate: true };
    }
    return null;
  };

  // Custom validator for export date
  // validateExportDate(control: FormControl) {
  //   const inputDate = new Date(control.value).getTime();
  //   const today = new Date();
  //   if (inputDate < today.getTime()) {
  //     return { invalidDate: true };
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
      console.log(consignment);
      
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

// Custom validator for export date must be rather than import date 1 date.
export function validateExportDate(control: AbstractControl): ValidationErrors | null {
  const exportDate = new Date(control.value).setHours(0, 0, 0, 0);
  const importDate = control.parent?.get('importDate')?.value;
  const today = new Date().setHours(0, 0, 0, 0);
  
  // Check if export date is at least 1 day after import date
  if (exportDate <= importDate || (exportDate - importDate) < 86400000) {
    return { invalidDateRange: true };
  }

  // Check if export date is today or in the future
  if (exportDate < today) {
    return { invalidExportDate: true };
  }

  return null;
}