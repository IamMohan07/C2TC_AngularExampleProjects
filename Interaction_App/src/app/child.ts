import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'child-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.html'
})
export class ChildComponent {

  @Input() data: string = "";

  notifyParent() {
    alert("Child notified parent!");
  }
}
