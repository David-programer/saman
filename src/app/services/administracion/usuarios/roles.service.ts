import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public url: string;

  constructor(public _http: HttpClient){this.url = global.url;}

  getRoles(){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/listarRoles`, {},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getModulos(){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/listaModulos`,{},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getZonas(){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/listaZonas`,{},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getDataRelaciones(id:number){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/listaRolesRelaciones`,{id: `${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getDataxRolId(id:any, url:string){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/${url}`,{id},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  postDataxRolId(role_id, item_id, indexName, url, indexName2?, item_id2?){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/${url}`,{role_id, [indexName]: item_id, [indexName2]: item_id2},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  postCreateRol(name:string, modulos:Array<Object>, zonas:Array<Object>){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/crearRolesRelaciones`, {name,modulos, zonas},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  postUpdateRol(id:number, name:string, modulos, zonas){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/actualizarRoles`, {id: `${id}`, name, modulos, zonas },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  postDeleteRol(id:number){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/eliminarRoles`, {id: `${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}