import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { global } from "../global";
import { INavData } from '@coreui/angular';

@Injectable()
export class navBarService {
  authSubject = new BehaviorSubject(false);
  public navItems: INavData[] = [];
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = global.url;
  }

  getMenu(){
    let token  = localStorage.getItem('token');
    let identity  = JSON.parse(localStorage.getItem('identity'));
    let idUser = identity.usuario.id;
    //console.log('Respuesta: '+identity.usuario.id);
    
    return this._http.get(this.url+'menuxUsuario/'+idUser, {
      headers: {Authorization: 'Bearer '  + token}      
    });    
  }

  getPermission(){
    let permisos = localStorage.getItem('permisos');
    return permisos;
  }
  
}
