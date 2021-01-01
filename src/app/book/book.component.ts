import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../Services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { AddShoppingcartComponent } from '../add-shoppingcart/add-shoppingcart.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 
  quantite: string;
  name: string;
  books: any;
  book:any;
  constructor(private bookService: BookService, public dialog: MatDialog) { }

  openDialog(books){
    const dialogRef = this.dialog.open(AddShoppingcartComponent, {
      width: '800px',
      data: this.book
    });
    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.quantite = result;
    });
  }
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAllBooks().subscribe(res => {
      this.books= res;
      console.log(res);
    })
  }

  delete(id){
    //delete item in student data
    this.bookService.deleteBook(id).subscribe(Response=>{
      //update list after delete in successful
      this.getAllBooks();
    })
  }

}
