import { ConsignmentService } from './../../../services/consignment/consignment.service';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  getConsignment(idRecieved: number) {
    return this.consignmentService.findById(idRecieved).subscribe(consignment => {
      console.log(consignment);
      
      this.updateForm = new FormGroup({
        id: new FormControl(consignment.id),
        quantity: new FormControl(consignment.quantity, [Validators.required]),
        tax: new FormControl(consignment.tax, [Validators.required]),
        importDate: new FormControl(consignment.importDate, [Validators.required]),
        exportDate: new FormControl(consignment.exportDate, [Validators.required]),
        product: new FormControl(consignment.product, [Validators.required]),
      });
    });
  };

}
