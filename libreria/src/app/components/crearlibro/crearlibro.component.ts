import { Component, ViewChild } from '@angular/core';
import { CargarService } from '../../services/cargar.service';
import { LibroService } from '../../services/libro.service';
import { Global } from 'src/app/services/global';
import { Libro } from '../../models/libro';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-crearlibro',
  templateUrl: './crearlibro.component.html',
  styleUrls: ['./crearlibro.component.css'],
  providers:[LibroService, CargarService]
})
export class CrearlibroComponent {
 public titulo:string;
 public libro:Libro;
 public libroGuardado:Libro;
 public url:string;
 public status:string;
 public idGuardado:string;
 public archivosParaCargar:Array<File>;
 @ViewChild('archivoImagen') fileInput:any;
 
 constructor(
  private _libroService:LibroService,
  private _cargarService:CargarService
 ){
  this.titulo="Guardar LIBRO";
  this.url=Global.url;
  this.libro=new Libro("","","","",2024,10,"");
  this.libroGuardado=new Libro("","","","",2024,10,"");
  this.status="";
  this.idGuardado="";
  this.archivosParaCargar=[]; 

}

guardarLibro(form:NgForm){
  this._libroService.guardarLibro(this.libro).subscribe(
    response=>{
      if(response.libro){
        if(this.archivosParaCargar){
          this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.libro._id,[],this.archivosParaCargar,'imagen')
          .then((result:any)=>{
            this.libroGuardado=result.response;
            this.status='success';
            console.log(response.libro._id);
            this.idGuardado=result.libro._id;
            form.reset();
            this.fileInput.nativeElement.value='';
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
