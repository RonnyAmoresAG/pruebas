import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { Libro } from '../../models/libro';
import { Global } from 'src/app/services/global';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-buscarlibro',
  templateUrl: './buscarlibro.component.html',
  styleUrls: ['./buscarlibro.component.css'],
  providers:[LibroService]
})
export class BuscarlibroComponent implements OnInit{
  public libros:Libro;
  public url:string;
  constructor(
    private _libroService:LibroService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.url=Global.url;
    this.libros=new Libro("","","","",2024,10,"");
  }

  ngOnInit(){
    this._route.params.subscribe(params=>{
      let nombre=params['nombre'];
      this.getLibroN(nombre);
    })
  }


  getLibroN(nombre:string){
    this._libroService.getLibroNomb(nombre).subscribe(
      response=>{
        if(response.libros){
          this.libros=response.libros;
          console.log(this.libros);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
