import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./angular-calculator-app.component.html",
  styleUrls: ["./angular-calculator-app.component.scss"],
})
export class AngularCalculatorAppComponent implements OnInit {
  result: number;
  constructor() {}

  ngOnInit(): void {}

  operation(value1: string, value2: string, value3: string) {
    switch (value3) {
      case "+":
        this.result = Number(value1) + Number(value2);
        break;
      case "-":
        this.result = Number(value1) - Number(value2);
        break;
      case "*":
        this.result = Number(value1) * Number(value2);
        break;
      case "/":
        this.result = Number(value1) / Number(value2);
        break;
    }
  }
}
