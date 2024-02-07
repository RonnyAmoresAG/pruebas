import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { CrearlibroComponent } from './components/crearlibro/crearlibro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetallelibroComponent } from './components/detallelibro/detallelibro.component';
import { EditarlibroComponent } from './components/editarlibro/editarlibro.component';
import { BuscarlibroComponent } from './components/buscarlibro/buscarlibro.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'libros',component:LibrosComponent},
  {path:'guardar-libro',component:CrearlibroComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'libro/:id',component:DetallelibroComponent},
  {path:'editar-libro/:id',component:EditarlibroComponent},
  {path:'buscar-libro/:id',component:BuscarlibroComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
