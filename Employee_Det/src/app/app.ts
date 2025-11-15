// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  // Inline template to avoid templateUrl resolution issues
  template: `
    <h1>Employee Details</h1>
    <ul>
      <li *ngFor="let emp of employee">
        {{ emp.eid }} - {{ emp.ename }} - {{ emp.desig }} - {{ emp.city }}
      </li>
    </ul>
  `,
  // Inline styles (optional)
  styles: [`
    ul { list-style: none; padding: 0; margin: 0; }
    li { padding: 6px 0; border-bottom: 1px solid #eee; }
  `],
  providers: [EmployeeService]
})
export class App {
  employee: Employee[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.employee = this.empService.getEmp();
  }
}
