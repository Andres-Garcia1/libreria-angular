import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { ReactiveFormsModule } from '@angular/forms';
import { buscarlibroComponent } from './buscarlibro/buscarlibro.component';



@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,buscarlibroComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent,LibrosComponent,buscarlibroComponent]
})
export class AppModule { }
