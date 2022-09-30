import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
  providedIn: 'root'
})
export class MetasService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

  getliquidacionmetasparametros(fecha){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'operaciones/liquidacionmetasparametros',
    {
      periodo: fecha
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getBaseVentasMesVentasMesAnualVencido(fecha){

    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'operaciones/listabaseventasxmesvsmesanualvencido',
    {
      periodo: fecha
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  guardaliquidacionmetasparametros(datos){
    let token  = localStorage.getItem('token');
    datos = JSON.parse(datos);
    
    return this._http.post(this.url+'operaciones/guardaliquidacionmetasparametros', datos,
    { headers: { 'Authorization': 'Bearer '  + token } });
  }

  guardaliquidacionmetasdetalle(datos){
    let token  = localStorage.getItem('token');
    datos = JSON.parse(datos);
    
    return this._http.post(this.url+'operaciones/guardaliquidacionmetasdetalle', datos,
    { headers: { 'Authorization': 'Bearer '  + token } });
  }

  getlistadetalleventasxmesvsmesanualvencido(fecha){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'operaciones/listadetalleventasxmesvsmesanualvencido',
    {
      periodo: fecha
    },
    {
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}
