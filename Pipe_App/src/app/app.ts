import { Component } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
import { EmployeeDesignationPipe } from './employee-designation.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    EmployeeDesignationPipe
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = "AngularJS Pipes Example";

  today = new Date();

  numberValue = 3234.567;
  priceValue = 69.96;

  employees = [
    { name: "MOHANKUMAR", designation: "Senior Developer - MJ INFOTECH" },
    { name: "GOWTHAM", designation: "Lead Designer - RG SOLUTIONS " },
    { name: "GOKUL", designation: "Chief Manager - GB Chasw" }
  ];
}
