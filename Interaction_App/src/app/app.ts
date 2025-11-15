import { Component } from '@angular/core';
import { ParentComponent } from './parent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.html'
})
export class App {}
