import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddShoppingcartComponent } from './add-shoppingcart/add-shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    NavbarComponent,
    UpdateBookComponent,
    AddShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
