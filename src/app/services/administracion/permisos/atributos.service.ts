import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class AtributoService {

  public url: string;
  
  constructor(public _http: HttpClient){this.url = global.url;}

  createAtributo(name:string, title:number, url:string, icon:string, badge:number, variant:string, text:string){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/crearAtributo`, {name, title, url, icon, badge, variant, text},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  updateAtributo(id:number,name:string, title:number, url:string, icon:string, badge:number, variant:string, text:string){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/actualizarAtributo`, {id: `${id}`,name, title, url, icon, badge, variant, text},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  deleteAtributo(id:number){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/eliminarAtributo`, {id: `${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}