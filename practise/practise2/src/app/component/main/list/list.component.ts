import { ConsignmentService } from "src/app/services/consignment/consignment.service";
import { consignment } from "src/app/models/consignment";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public dataSource!: MatTableDataSource<consignment>;
  public consignments!: Array<consignment>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    "no",
    "product",
    "quantity",
    "tax",
    "importDate",
    "exportDate",
    "action",
  ];
  constructor(private consignmentService: ConsignmentService) {}

  ngOnInit(): void {
    this.getAllCOnsignment();

    // this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
    //   if (sortHeaderId === 'product.name') {
    //     return data.product.name.toLowerCase();
    //   } else {
    //     return data[sortHeaderId];
    //   };

    // };
  }

  getAllCOnsignment() {
    this.consignmentService.getAllConsignment().subscribe((value) => {
      this.consignments = value;
      this.dataSource = new MatTableDataSource(this.consignments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  // sortData(sort: Sort) {
  //   const data = this.dataSource.data.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.dataSource.data = data;
  //     return;
  //   }

  //   this.dataSource.data = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'product.name':
  //         return sortCategoryByName(a, b) * (isAsc ? 1 : -1);
  //       default:
  //         return 0;
  //     }
  //   });
  // }
}

// function sortCategoryByName(consignment1: consignment, consignment2: consignment): number {
//   const name1 = consignment1.product.name.toLowerCase();
//   const name2 = consignment2.product.name.toLowerCase();
//   if (name1 < name2) {
//     return -1;
//   } else if (name1 > name2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

