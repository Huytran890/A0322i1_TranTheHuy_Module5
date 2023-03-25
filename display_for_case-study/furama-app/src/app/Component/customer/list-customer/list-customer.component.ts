import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Router } from "@angular/router";
import { Observable, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { customer } from "src/app/models/customer/customer";
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-customer.component.html",
  styleUrls: ["./list-customer.component.scss"],
})
export class ListCustomerComponent implements OnInit {

  public customers: Array<customer> = [];
  formSearch: FormGroup;
  delId: string;

  currentPage = 1;
  pageSize = 5;
  totalPages = Math.ceil(this.customers.length / this.pageSize);
  pagedProducts$: Observable<customer[]>;
  private pageChange$ = new Subject<number>();

  constructor(private customerService: CustomerService, private router: Router) {
    this.pagedProducts$ = this.pageChange$.pipe(
      switchMap(page => {
        const startIndex = (page - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const products = this.customers.slice(startIndex, endIndex);
        return of(this.customers);
      })
    );
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  goToPage(page: number) {
    this.currentPage;
  }
  
  getAllCustomer(): customer[] {
    return this.customers = this.customerService.getAll();
  }

  infoDelete(id: string, name: string) {
    // this.delId = id;
    // document.getElementById("delName").innerText = name;
  }

  deleteGenerals(delId: string) {
    // this.generalsService.deleteGenerals(delId).subscribe(next => {
    //   this.findAll();
    // });
  }

  showEditPage(id: string) {
    // this.router.navigate(['generals/edit', id])
  }
  searchGenerals() {
    // this.generalsService.searchGenerals(this.formSearch.value.nameSearch).subscribe(next => {
    //   this.generals = next;
    // })
  }
}
