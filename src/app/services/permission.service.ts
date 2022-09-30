import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  public url: string;

  constructor(
    public _http: HttpClient,
    private _router: Router
  ){ 
    this.url = global.url;
  }

  getPermissionView(permisoValidar){
    let respuesta = false;
    let permisos = localStorage.getItem('permisos');
    JSON.parse(permisos).forEach(element => {
        if(element == permisoValidar){
            respuesta =  true;
        }        
    });
    if(!respuesta){
      console.log('No tiene permisos para acceder a esta página, será redirijido...');
      this._router.navigate(['home']);
    }
  }
}
