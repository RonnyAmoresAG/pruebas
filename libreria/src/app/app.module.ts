import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { CrearlibroComponent } from './components/crearlibro/crearlibro.component';
import { DetallelibroComponent } from './components/detallelibro/detallelibro.component';
import { EditarlibroComponent } from './components/editarlibro/editarlibro.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BuscarlibroComponent } from './components/buscarlibro/buscarlibro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibrosComponent,
    CrearlibroComponent,
    DetallelibroComponent,
    EditarlibroComponent,
    EncabezadoComponent,
    PieComponent,
    ContactoComponent,
    BuscarlibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
