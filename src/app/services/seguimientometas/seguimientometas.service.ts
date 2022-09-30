import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../global";

@Injectable({
  providedIn: 'root'
})
export class SeguimientoMetasService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

  getListaDetalleVentasMesActual(){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'operaciones/listadetalleventasxmesactual',
    {},
    {
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}
