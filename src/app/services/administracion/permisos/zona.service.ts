import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  public url: string;

  constructor(public _http: HttpClient){this.url = global.url;}

  createZona(name:string){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/crearZona`, {name},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  updateZona(id:number,nombre:string){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/ActualizarZonas`, {id: `${id}`, name: nombre},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  deleteZona(id:number){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/eliminarZonas`, {id: `${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}