import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { StatusColorDirective } from './status.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, HighlightDirective, StatusColorDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  isVisible = true;
  isSuccess = true;

  fruits = ['Apple', 'Banana', 'Orange'];

  selectedColor = "Red";
  
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleSuccess() {
    this.isSuccess = !this.isSuccess;
  }
}
