import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  student: Student;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((next) => {
      const id = next.get("id");
      if (id != null) {
        this.fetchConsignmentDetail(id);
      }
    });
  }

  ngOnInit(): void {}

  fetchConsignmentDetail(id: any) {
    this.studentService.findById(parseInt(id)).subscribe((value) => {
      this.student = value;
      console.log(this.student);
    });
  }

}
