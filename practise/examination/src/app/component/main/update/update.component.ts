import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Association } from "src/app/models/Association";
import { Instructor } from "src/app/models/Instructor";
import { GroupService } from "src/app/services/group/group.service";
import { InstructorService } from "src/app/services/instructor/instructor.service";
import { StudentService } from "src/app/services/student/student.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
  public updateForm: FormGroup;
  public instructors: Array<Instructor> = [];
  public groups: Array<Association> = [];
  public id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private groupService: GroupService,
    private instructorService: InstructorService,
    private toastr: ToastrService
  ) {
    this.groupService.getAllGroup().subscribe(
      (next) => {
        console.log(next);
        this.groups = next;
      },
      (error) => {
        console.log("Not Found List Groups!");
      },
      () => {}
    );

    this.instructorService.getAllInstructor().subscribe(
      (next) => {
        console.log(next);
        this.instructors = next;
      },
      (error) => {
        console.log("Not Found List Instructors!");
      },
      () => {}
    );

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get("id");
      this.getStudent(this.id);
    });
  }

  ngOnInit(): void {
    console.log(this.id);
  }

  getStudent(idRecieved: number) {
    return this.studentService.findById(idRecieved).subscribe((student) => {
      console.log(student);

      this.updateForm = new FormGroup({
        id: new FormControl(student.id),
        studentCode: new FormControl(student.studentCode, [
          Validators.required,
          Validators.pattern("^SV-[0-9]{4}$"),
        ]),
        studentName: new FormControl(student.studentName, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(45),
        ]),
        email: new FormControl(student.email, [
          Validators.required,
          Validators.email,
        ]),
        phoneNumber: new FormControl(student.phoneNumber, [
          Validators.required,
          Validators.pattern("^[0-9]{9}$"),
        ]),
        association: new FormControl(student.association, [Validators.required]),
        instructor: new FormControl(student.instructor, [Validators.required]),
      });
    });
  }

  update(id: number): void {
    if (this.updateForm.valid) {
      const consignment = this.updateForm.value;
      console.log(consignment);
      this.studentService
        .updateById(consignment, this.id)
        .subscribe((value) => {
          console.log("Success Updating!");
          this.router.navigateByUrl("/list").then(
            (success) => {
              this.toastr.success("Successful Updating!", "Notification", {
                timeOut: 2000,
              });
              this.updateForm.reset();
            },
            (error) => {
              console.log(error);
              this.toastr.error(
                "Update failed!, Please check the input data",
                "Notification",
                { timeOut: 2000 }
              );
            }
          );
        });
    }
  }
}
