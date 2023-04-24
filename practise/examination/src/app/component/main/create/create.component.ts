import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Association } from "src/app/models/Association";
import { Instructor } from "src/app/models/Instructor";
import { GroupService } from "src/app/services/group/group.service";
import { InstructorService } from "src/app/services/instructor/instructor.service";
import { StudentService } from "src/app/services/student/student.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  public studentForm: FormGroup;
  public instructors: Array<Instructor> = [];
  public groups: Array<Association> = [];

  constructor(
    private groupService: GroupService,
    private instructorService: InstructorService,
    private studentService: StudentService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.studentForm = new FormGroup({
      id: new FormControl(""),
      studentCode: new FormControl("", [
        Validators.required,
        Validators.pattern("^SV-[0-9]{4}$")
      ]),
      studentName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45),
        Validators.pattern(/^[a-zA-ZÀ-ỹ ]+$/)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phoneNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^(\\d{9}|\\d{11})$"),
      ]),
      association: new FormControl("", [Validators.required]),
      instructor: new FormControl("", [Validators.required]),
    });

    this.groupService.getAllGroup().subscribe(
      (next) => {
        console.log(next);
        this.groups = next;
      },
      (error) => {
        console.log("Not found list groups!");
      },
      () => {}
    );

    this.instructorService.getAllInstructor().subscribe(
      (next) => {
        console.log(next);
        this.instructors = next;
      },
      (error) => {
        console.log("Not found list instructors!");
      },
      () => {}
    );
  }

  ngOnInit(): void {}

  // parseDate(dateString: string): string {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = ("0" + (date.getMonth() + 1)).slice(-2);
  //   const day = ("0" + date.getDate()).slice(-2);
  //   return `${year}-${month}-${day}`;
  // }

  save(): void {
    console.log(this.studentForm);
    if (this.studentForm.valid) {
      const student = this.studentForm.value;
      console.log(student);

      this.studentService.addNewStudent(student).subscribe(
        (value) => {
          console.log("Success Adding!");
          this.router.navigateByUrl("/list").then((success) => {
            this.toastr.success("Successful Adding!", "Notification", {
              timeOut: 2000,
            });
            this.studentForm.reset();
          });
        },
        (error) => {
          console.log(error);
          this.toastr.error(
            "Add failed!, Please check the input data",
            "Notification",
            { timeOut: 2000 }
          );
        }
      );
    }
  }
}
