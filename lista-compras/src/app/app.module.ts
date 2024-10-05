import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
