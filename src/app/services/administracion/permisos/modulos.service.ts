import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class moduloService {

  public url: string; 

  constructor(public _http: HttpClient){this.url = global.url;}

  createModulos(name:string,attribute_id:any[],permisos:any[]){
    let token  = localStorage.getItem('token');
    return this._http.post(`${this.url}permisos/crearModules`, {name,attribute_id,permisos},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  deleteModulo(id:number){
    let token  = localStorage.getItem('token');
    return this._http.post(`${this.url}permisos/eliminarModules`, {id: `${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  updateModulo(id:number,name:string, attribute_id,permisos:any[]){
    let token  = localStorage.getItem('token');
    return this._http.post(`${this.url}permisos/actualizarModules`, {id:`${id}`,name,attribute_id,permisos},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  deleteRelacion(url:string, path1:string, value1:any, path2:string, value2:any){
    let token  = localStorage.getItem('token');    
    return this._http.post(`${this.url}permisos/${url}`, {[path1]: `${value1}`, [path2]: `${value2}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getDataxModulo(id:number){
    let token  = localStorage.getItem('token');
    return this._http.post(`${this.url}permisos/listarModuloxPermisos`, {id:`${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  updateRelacion(url,path1, value1, path2, value2, path3, value3){
    let token  = localStorage.getItem('token');
    return this._http.post(`${this.url}permisos/${url}`, {[path1]:`${value1}`,[path2]:`${value2}`,[path3]:`${value3}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}