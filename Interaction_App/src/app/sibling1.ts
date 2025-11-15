import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sibling1-comp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sibling1.html'
})
export class Sibling1Component {

  inputValue: string = "";     // EMPTY default

  @Output() send = new EventEmitter<string>();

  sendToSibling2() {
    this.send.emit(this.inputValue);
  }
}
