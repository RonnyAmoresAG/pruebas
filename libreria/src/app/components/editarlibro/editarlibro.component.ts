import { Component, OnInit } from '@angular/core';
import { CargarService } from '../../services/cargar.service';
import { LibroService } from '../../services/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from 'src/app/services/global';
import { NgForm } from '@angular/forms';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-editarlibro',
 /* templateUrl: '../editarlibro.component.html',*/
 templateUrl: '../crearlibro/crearlibro.component.html',
  styleUrls: ['./editarlibro.component.css'],
  providers:[LibroService, CargarService]
})
export class EditarlibroComponent implements OnInit{
  public titulo:string;
  public libro:Libro;
  public libroGuardado:Libro;
  public url:string;
  public status:string;
  public archivosParaCargar:Array<File>;
  constructor(
    private _libroService:LibroService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute 
    ){
      this.titulo="EDITAR LIBRO";
    this.url=Global.url;
    this.libro=new Libro("","","","",2024,10,"");
    this.libroGuardado=new Libro("","","","",2024,10,"");
    this.status="";
    this.archivosParaCargar=[];
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
    guardarLibro(form:NgForm){
      this._libroService.updateLibro(this.libro).subscribe(
        response=>{
          if(response.libro){
            if(this.archivosParaCargar){
              this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.libro._id,[],this.archivosParaCargar,'imagen')
              .then((result:any)=>{
                this.libroGuardado=result.response;
                this.status='success';
                console.log(response.libro._id);
                form.reset();
              });
            }else{
              this.status='failed';
            }
          }else{
            this.status='failed';
          }
        },
        error=>{
          console.log(<any>error);
        }
      );
    }
    imagenChangeEvent(archivoSeleccionado:any){
      this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files;
    }
}