import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Global } from 'src/app/services/global';
import { LibroService } from 'src/app/services/libro.service';
import {Libro} from '../../models/libro';

@Component({
  selector: 'app-detallelibro',
  templateUrl: './detallelibro.component.html',
  styleUrls: ['./detallelibro.component.css'],
  providers:[LibroService]
})
export class DetallelibroComponent implements OnInit {
public url:string;
public libro:Libro;
public confirm:boolean;
constructor(
  private _libroService:LibroService,
  private _router:Router,
  private _route:ActivatedRoute
  ){
    this.url=Global.url;
    this.libro=new Libro("","","","",2024,10,"");
    this.confirm=false;
  }
  ngOnInit(){
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this.getLibro(id);
    })
  }
  
  getLibro(id:string){
    this._libroService.getLibro(id).subscribe(
      response=>{
        if(response.libro){
           this.libro=response.libro;  
        }
      },
      error=>{
        console.log(<any>error)
      }
    );
  }

  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }

  borrarLibro(id:string){
    this._libroService.deleteLibro(id).subscribe(
      response=>{
        if(response.libro){
          this._router.navigate(['/libros']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  

}

