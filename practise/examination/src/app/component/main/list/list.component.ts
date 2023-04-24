import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { Student } from "src/app/models/Student";
import { StudentService } from "src/app/services/student/student.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public dataSource!: MatTableDataSource<Student>;
  public students!: Array<Student>;
  
  title: string = "Are you sure want to delete?";
  idToDelete: number;
  onClose: any;

  studentById: Student;

  myForm: FormGroup;

  public showSpinner = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    "no",
    "studentCode",
    "studentName",
    "association.groupName",
    "association.projectName",
    "instructor.instructorName",
    "email",
    "phoneNumber",
    "action",
  ];
  constructor(
    private studentService: StudentService,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.getAllStudent();
      this.showSpinner = false;
    }, 1000);
  }

  getAllStudent() {
    this.studentService.getAllStudent().subscribe((value) => {
      console.log(value);
      this.students = value;
      this.dataSource = new MatTableDataSource(this.students);
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
      class: "modal-dialog-centered",
    });

    this.idToDelete = id;
    this.infoDelete(this.idToDelete);
  }

  delete() {
    if (!this.idToDelete) return;
    this.studentService.deleteById(this.idToDelete).subscribe((next) => {
      // this.onClose.next('confirm');
      this.bsModalRef.hide();
      this.getAllStudent();
      this.toastr.success("Successful Deleting!", "Notification", {
        timeOut: 2000,
      });
    });
  }

  infoDelete(id: number) {
    this.studentService.findById(id).subscribe((next) => {
      this.studentById = next;
    });
  }

  searchByRequirement(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.studentService
      .findByRequirement(filterValue.trim().toLowerCase())
      .subscribe(
        (data) => {
          console.log(data);
          this.dataSource.data = data;
          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
