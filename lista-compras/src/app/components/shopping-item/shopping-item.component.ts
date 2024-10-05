import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input() item!: ShoppingItem;
  @Output() deleteItem = new EventEmitter<number>();

  isEditing: boolean = false;
  editedName: string = '';

  toggleEdit() {
    this.isEditing = true;
    this.editedName = this.item.name;
  }

  saveEdit() {
    const name = this.editedName.trim();
    if (name) {
      this.item.name = name;
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }

  togglePurchased() {
    this.item.purchased = !this.item.purchased;
  }

  onDelete() {
    this.deleteItem.emit(this.item.id);
  }
}
