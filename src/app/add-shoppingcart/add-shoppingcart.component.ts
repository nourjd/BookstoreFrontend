import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../Model/book';

@Component({
  selector: 'app-add-shoppingcart',
  templateUrl: './add-shoppingcart.component.html',
  styleUrls: ['./add-shoppingcart.component.css']
})
export class AddShoppingcartComponent implements OnInit {

  quantite: number;
  name: string;
  book:Book
  constructor(
    public dialogRef: MatDialogRef<AddShoppingcartComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Book ) {
      this.book=data;
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }




}
