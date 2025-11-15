import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sibling2-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sibling2.html'
})
export class Sibling2Component {
  @Input() received: string = "";
}
