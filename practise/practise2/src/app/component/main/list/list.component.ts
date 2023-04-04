import { ConsignmentService } from "src/app/services/consignment/consignment.service";
import { consignment } from "src/app/models/consignment";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public dataSource!: MatTableDataSource<consignment>;
  public consignments!: Array<consignment>;
  title: string = 'Are you sure want to delete?';
  idToDelete: number
  onClose: any;

  consignmentById: consignment;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    "no",
    "idConsignment",
    "product.name",
    "quantity",
    "product.origin",
    "product.price",
    "tax",
    "importDate",
    "exportDate",
    "action",
  ];
  constructor(private consignmentService: ConsignmentService,
              private modalService: BsModalService, public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    this.getAllCOnsignment();
  }

  getAllCOnsignment() {
    this.consignmentService.getAllConsignment().subscribe((value) => {
      this.consignments = value;
      this.dataSource = new MatTableDataSource(this.consignments);
      this.dataSource.paginator = this.paginator;

      this.dataSource.sortingDataAccessor = (obj, property) =>
        this.getProperty(obj, property);

      this.dataSource.sort = this.sort;
    });
  }

  getProperty = (obj, path) => path.split(".").reduce((o, p) => o && o[p], obj);

  sortingDataAccessor = (
    data: object,
    sortHeaderId: string
  ): string | number => {
    const propPath = sortHeaderId.split(".");
    const value: any = propPath.reduce(
      (curObj, property) => curObj[property],
      data
    );
    return !isNaN(value) ? Number(value) : value;
  };


  openModal(template: TemplateRef<any>, id: any) {
    this.bsModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered'
    });

    this.idToDelete = id;
    this.infoDelete(this.idToDelete);
  };
  
  delete() {
    if (!this.idToDelete) return;
    this.consignmentService.deleteById(this.idToDelete).subscribe(next => {
      // this.onClose.next('confirm');
      this.bsModalRef.hide();
      this.getAllCOnsignment();
    });
  }; 

  infoDelete(id: number) {
    this.consignmentService.findById(id).subscribe(next => {
      this.consignmentById = next;
    });
  };


  searchByName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.consignmentService.findByProductName(filterValue.trim().toLowerCase()).subscribe(
      (data) => {
        this.dataSource.data = data;
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  searchByDate(event: Event) {

  };

}
