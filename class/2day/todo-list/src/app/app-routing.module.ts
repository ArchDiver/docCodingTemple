import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferenceCodeComponent } from './reference-code/reference-code.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';

const routes: Routes = [
  {
    path: 'reference', component: ReferenceCodeComponent
  },
  {
    path:'home', component: TodoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
