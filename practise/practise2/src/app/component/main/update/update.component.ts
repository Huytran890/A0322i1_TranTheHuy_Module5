import { ConsignmentService } from './../../../services/consignment/consignment.service';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public updateForm: FormGroup;
  public products: Array<product> = [];
  public id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private productService: ProductService, private consignmentService: ConsignmentService) {
    
    this.productService.getAllProduct().subscribe(next => {
      console.log(next);
      this.products = next;
    }, error => {
      console.log("Not found list products!");
    }, () => {});

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getConsignment(this.id);

    });

  };

  ngOnInit(): void {
  };

  parseDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  update(id: number): void {
    console.log(this.updateForm);
    if(this.updateForm.valid) {
      const consignment = this.updateForm.value;
      consignment.importDate = this.parseDate(consignment.importDate);
      consignment.exportDate = this.parseDate(consignment.exportDate);
      this.consignmentService.updateById(consignment, this.id).subscribe(value => {
        console.log("Success Updating!");
        this.router.navigateByUrl('/list').then(success => {
          this.updateForm.reset();
        })
      })
    }
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




  getConsignment(idRecieved: number) {
    return this.consignmentService.findById(idRecieved).subscribe(consignment => {
      console.log(consignment);
      
      this.updateForm = new FormGroup({
        id: new FormControl(consignment.id),
        idConsignment: new FormControl(consignment.idConsignment, [Validators.required, Validators.pattern('^LH-[0-9]{4}$')]),
        quantity: new FormControl(consignment.quantity, [Validators.required, Validators.min(1)]),
        tax: new FormControl(consignment.tax, [
          Validators.required,
          Validators.pattern('^(?!-)([1-9]|[1-2][0-9]|30)%$'),
        ]),
        importDate: new FormControl(consignment.importDate, [
          Validators.required,
          this.validateImportDate
        ]),
        exportDate: new FormControl(consignment.exportDate, [
          Validators.required,
          // this.validateExportDate,
          validateExportDate
        ]),
        product: new FormControl(consignment.product, [Validators.required]),
      });

    });
  };

}


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
