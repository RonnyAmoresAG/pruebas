import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Libro } from "../models/libro";

@Injectable()
export class LibroService{
    public url:string;
    constructor(
        private _http:HttpClient //realizar peticion
    ){
        this.url=Global.url;
    }

    //ver libros
    //http://localhost:3600/libros

    getLibros(): Observable<any>{  //ver lo que hay dentro
            let headers= new HttpHeaders().set('Content-Type', 'application/json');
            return this._http.get(this.url+'libros',{headers:headers}); 
    }

    //guardar libro

    guardarLibro(libro: Libro): Observable<any>{  //ver lo que hay dentro
        let params= JSON.stringify(libro); //pasomos en json
        let headers= new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-libro',params,{headers:headers}); 
    }   
     //ver libro
    getLibro(id:string): Observable<any>{  //ver lo que hay dentro
        let headers= new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'libro/'+id,{headers:headers}); 
   }

  //editar libro
   updateLibro(libro:Libro): Observable<any>{  //ver lo que hay dentro
    let params= JSON.stringify(libro); 
    let headers= new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+'libro/'+libro._id,params,{headers:headers}); 
   }

   deleteLibro(id:string): Observable<any>{  //ver lo que hay dentro
    let headers= new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url+'libro/'+id,{headers:headers}); 
   }

//buscar un libro
   getLibroNomb(nombre:string): Observable<any>{  //ver lo que hay dentro
    let headers= new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+'libro-nombre/'+nombre,{headers:headers}); 
}

}