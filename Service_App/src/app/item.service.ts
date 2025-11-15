import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: string[] = [];

  getItems() {
    return this.items;
  }

  addItem(item: string) {
    if (item.trim() !== "") {
      this.items.push(item.toUpperCase());
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
