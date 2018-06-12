import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { MaterialComponent } from './material/material.component';

const routes : Routes = [
  { path : 'cliente', component : ClienteComponent },
  { path : 'material', component : MaterialComponent }
];

@NgModule({
  exports : [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RouteModule { }
