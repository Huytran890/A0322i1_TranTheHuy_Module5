import { ConsignmentService } from "src/app/services/consignment/consignment.service";
import { consignment } from "src/app/models/consignment";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { DatePipe } from '@angular/common';
import { SelectionModel } from "@angular/cdk/collections";

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

  myForm: FormGroup;

  public showSpinner = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    // "checkbox",
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
  // selection = new SelectionModel<consignment>(true, []);
  constructor(private consignmentService: ConsignmentService,
              private modalService: BsModalService, public bsModalRef: BsModalRef,
              private toastr: ToastrService, private datePipe: DatePipe) {
      this.myForm = new FormGroup({
        importDate: new FormControl(''),
        exportDate: new FormControl(''),
      });
  }

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.getAllCOnsignment();
      this.showSpinner = false;
    }, 1000)
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
      this.toastr.success("Successful Deleting!", "Notification", {timeOut: 2000});
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

  // deleteSelected() {
  //   const selectedIds = this.selection.selected.map(item => item.id);
  //   if (selectedIds.length > 0) {
  //     if (confirm('Bạn có chắc muốn xóa các đối tượng đã chọn?')) {
  //       this.consignmentService.deleteItems(selectedIds).subscribe(
  //         response => {
  //           // Refresh data
  //           this.getAllCOnsignment();
  //           // Clear selection
  //           this.selection.clear();
  //         },
  //         error => {
  //           console.error(error);
  //         }
  //       );
  //     }
  //   } else {
  //     alert('Vui lòng chọn ít nhất một đối tượng để xóa.');
  //   }
  // };

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // masterToggle() {
  //   this.isAllSelected()
  //     ? this.selection.clear()
  //     : this.dataSource.data.forEach((row) => this.selection.select(row));
  // }

  // searchByDateI(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   const importDate = new Date(filterValue);
  //   console.log(importDate);
    
  //   this.consignmentService.findByEDate(importDate).subscribe(
  //     (data) => {
  //       console.log(data);
        
  //       this.dataSource.data = data;
  //       if (this.dataSource.paginator) {
  //         this.dataSource.paginator.firstPage();
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };


  searchByDate() {
    const importDate = this.myForm.get('importDate').value;
    const exportDate = this.myForm.get('exportDate').value;

    console.log(importDate);
    console.log(exportDate);
    

    this.consignmentService.findByDate(importDate, exportDate).subscribe(result => {
      if(result.length === 0) {
        this.dataSource.data = [];
      } else {
        this.consignments = result;
        this.dataSource.data = this.consignments;
      }
    });
  };

}
