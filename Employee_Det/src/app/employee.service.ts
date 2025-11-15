import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Employee list
  employee: Employee[] = [
    { eid: 1, ename: "DAMIAN", desig: "HEAD - FORGER GROUPS", city: "ANDAMAN" },
    { eid: 2, ename: "ANYA", desig: "CO HEAD - FORGER GROUPS", city: "ANDAMAN" },
    { eid: 3, ename: "LOID FORGER", desig: "CREATOR - FORGER GROUPS", city: "ANDAMAN" },
    { eid: 4, ename: "YOR FORGER", desig: "CO CREATER - FORGER GROUPS", city: "ANDAMAN" }
  ];

  // Return all employee data
  getEmp(): Employee[] {
    return this.employee;
  }
}
