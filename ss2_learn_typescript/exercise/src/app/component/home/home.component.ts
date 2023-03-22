import { CommonService } from "./../../Service/common.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private common: CommonService, private fb: FormBuilder) {}

  public fomrData: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(),
  })

  public formData2 = this.fb.group({
    name: [''],
    age: [''],
  })

  public counter = 0;

  public calculate = 0;

  public myColor = "red";

  public student = { id: 1, name: "Huy", age: 25 };

  public listStudentName = ["Thế Huy", "Đình Tuấn", "Như Quỳnh", "Mỹ Duyên"];

  public listStudent = [
    {
      name: "Thế Huy",
      gender: 0,
      email: "huytran@gmail.com",
      currentMoney: 39379,
    },
    {
      name: "Đình Tuấn",
      gender: 2,
      email: "dinhtuan@gmail.com",
      currentMoney: 5763,
    },
    {
      name: "Như Quỳnh",
      gender: 1,
      email: "nhuquynh@gmail.com",
      currentMoney: 4520,
    },
    {
      name: "Mỹ Duyên",
      gender: 1,
      email: "mynguyen@gmail.com",
      currentMoney: 6988,
    },
  ];

  public data = [
    { city: "Chọn Thành Phố", district: ["--Quận / Huyện--"] },
    {
      city: "An Giang",
      district: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn",
      ],
    },
    {
      city: "Đà Nẵng",
      district: [
        "Quận Sơn Trà",
        "Quận Ngũ Hành Sơn",
        "Quận Liên Chiểu",
        "Quận Cẩm Lệ",
        "Huyện Hòa Vang",
        "Quận Hòa Khánh",
        "Quận Thanh Khê",
      ],
    },
  ];

  public tempDistrict: Array<string> = ["--Quận / Huyện--"];

  ngOnInit(): void {
    console.log(this.listStudent);

    this.counter = this.common.counter;
    this.calculate = this.common.expotional(this.counter);
    this.common.counter++;
  }

  public resetName(name: string): void {
    this.student.name = "";
  }

  public changeCity(event: any) {
    // c1
    const city = event.target.value;
    // console.log('target city', city);
    // const district = this.data.filter(data => data.city === city)
    // console.log("display district", district);
    // if(district) {
    //   this.tempDistrict = district[0].district;
    // }

    // c2
    this.tempDistrict =
      this.data.find((variable) => variable.city === city)?.district || [];
  }

  public onSubmit() {
    console.log("Render the information: ", this.fomrData.value);
    
  }

}
