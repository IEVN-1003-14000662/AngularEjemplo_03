import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu/menu.component';
import { MaterialModule } from './material/material/material.module';
import { DatosAlumnoComponent } from './formularios/datos-alumno/datos-alumno.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DatosAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
