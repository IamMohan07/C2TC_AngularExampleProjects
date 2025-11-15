import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeDesignation',
  standalone: true
})
export class EmployeeDesignationPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
