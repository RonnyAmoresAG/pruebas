import { Component, OnInit } from '@angular/core';
import {LibroService} from '../../services/libro.service';
import { Global } from 'src/app/services/global';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
  providers:[LibroService]
})
export class LibrosComponent implements OnInit{
  public libros:Libro[];
  public url:string;
  constructor(
    private _libroService:LibroService
  ){
    this.url=Global.url;
    
    this.libros=[];
  }
  ngOnInit(){
    this.getLibros();
  }
  getLibros(){
    this._libroService.getLibros().subscribe(
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
