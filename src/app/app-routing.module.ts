import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  {path: '', component: NavbarComponent, children: [
    {path: '', component: BookComponent},
    {path: 'add', component: AddBookComponent},
    {path: 'update/:id', component: UpdateBookComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
