import { Component } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  items: ShoppingItem[] = [];
  newItemName: string = '';
  nextId: number = 1;

  addItem() {
    const name = this.newItemName.trim();
    if (name) {
      this.items.push({
        id: this.nextId++,
        name: name,
        purchased: false
      });
      this.newItemName = '';
    }
  }

  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  get notPurchasedItems(): ShoppingItem[] {
    return this.items.filter(item => !item.purchased);
  }

  get purchasedItems(): ShoppingItem[] {
    return this.items.filter(item => item.purchased);
  }
}
