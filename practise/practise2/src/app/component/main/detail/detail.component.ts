import { ConsignmentService } from 'src/app/services/consignment/consignment.service';
import { consignment } from './../../../models/consignment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public 
  consignment: consignment;

  constructor(private consignmentService: ConsignmentService,
              private activatedRoute: ActivatedRoute) {
      this.activatedRoute.pa
  }

  ngOnInit(): void {
  }

}
