import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class userService {

  public url: string;

  constructor(public _http: HttpClient){this.url = global.url;}

  postCrearUsuario(datos:any){    
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/crearUsuario`,{
        role_id : datos.role_id,
        name : datos.name,
        cedula: datos.cedula,
        email : datos.email.toLowerCase(),
        password : datos.password, 
        profile_photo_path : datos.profile_photo_path,
        id_jerarquia : datos.id_jerarquia,
        id_jefe: datos.id_jefe
    },{
        headers: {Authorization: 'Bearer '  + token}
      });
  }

  postActualizarUsuarioR(role_id:number, user_id:number ){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/actualizarRolUsuarioDetalle`,{role_id: `${role_id}`, user_id: `${user_id}`},{
        headers: {Authorization: 'Bearer '  + token}
      });
  }

  postActualizarUsuario(id, datos:any){    
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/actualizarUsuario`,{
      id,
      role_id : datos.role_id,
      name : datos.name,
      cedula: datos.cedula,
      email : datos.email.toLowerCase(),
      password : datos.password, 
      profile_photo_path : datos.profile_photo_path,
      id_jerarquia : datos.id_jerarquia,
      id_jefe: datos.id_jefe,
      id_estado: datos.id_estado
    },{
        headers: {Authorization: 'Bearer '  + token}
      });
  }

  postEliminarUsuario(id:number){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/eliminarUsuario`,{id: `${id}`},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getOneUser(id:number){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/get_one_user`,{id: `${id}`},{
        headers: {Authorization: 'Bearer '  + token}
    });
  }
}