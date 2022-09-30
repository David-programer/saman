import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  public url: string;

  constructor(public _http: HttpClient){this.url = global.url;}

  createPermiso(name:string, attribute_id:any[]){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/crearPermisos`, {name,attribute_id},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  deletePermiso(id:number){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/eliminarPermiso`, {id: `${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  updatePermiso(id:number,name:string, attribute_id){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/actualizarPermisos`, {id:`${id}`,name,attribute_id},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  deleteRelacion(url:string, path1:string, value1:any, path2:string, value2:any){
    let token  = localStorage.getItem('token');    
    return this._http.post(`${this.url}permisos/${url}`, {[path1]: `${value1}`, [path2]: `${value2}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  updateRelacion(id:number, module_id:number, permission_id:number){
    let token  = localStorage.getItem('token');         
    return this._http.post(`${this.url}permisos/actualizarModuloPermiso`, {id: `${id}`, module_id, permission_id},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}