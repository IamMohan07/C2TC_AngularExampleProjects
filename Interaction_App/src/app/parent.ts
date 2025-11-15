import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child';
import { Sibling1Component } from './sibling1';
import { Sibling2Component } from './sibling2';

@Component({
  selector: 'parent-comp',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent, Sibling1Component, Sibling2Component],
  templateUrl: './parent.html'
})
export class ParentComponent {

  parentMessage: string = "";           // input box text
  sibling1Value: string = "";           // empty default
  sibling2Received: string = "";        // receives from sibling1

  receiveFromSibling1(data: string) {
    this.sibling2Received = data;
  }
}
