import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  newItem = "";

  constructor(private itemService: ItemService) {}

  get items() {
    return this.itemService.getItems();
  }

  addItem() {
    this.itemService.addItem(this.newItem);
    this.newItem = "";
  }

  removeItem(i: number) {
    this.itemService.removeItem(i);
  }
}
