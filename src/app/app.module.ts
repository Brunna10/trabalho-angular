import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MaterialComponent } from './material/material.component';
import { ClienteService } from './cliente.service';
import { RouteModule } from './route.module';
import { MaterialService } from './material.service';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule
    
  ],
  providers: [ClienteService, MaterialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
