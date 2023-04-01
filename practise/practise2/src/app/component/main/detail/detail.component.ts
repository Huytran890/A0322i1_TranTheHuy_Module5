import { ConsignmentService } from "src/app/services/consignment/consignment.service";
import { consignment } from "./../../../models/consignment";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  consignment: consignment;

  constructor(
    private consignmentService: ConsignmentService,
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
    this.consignmentService.findById(parseInt(id)).subscribe((value) => {
      this.consignment = value;
      console.log(this.consignment);
    });
  }
}
