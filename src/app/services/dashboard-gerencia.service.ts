import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
  providedIn: 'root'
})
export class DashboardGerenciaService {
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = global.url;
  }
  
  getProductosPorDia(){
    // http://192.168.2.78:90/api/dashboard/productosxdiavsdiamesvencido
    let token  = localStorage.getItem('token');
    return this._http.get(this.url+'dashboard/productosxdiavsdiamesvencido', {
      headers: {Authorization: 'Bearer '  + token}      
    });
  }

  getProductoPorZonas(producto, tipo){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxzonasxdiavsdiamesvencido',
    {
      idproducto: producto, idtipoproducto:tipo
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getProductoPorCiudades(producto, tipo, zona){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxmunicipiosxdiavsdiamesvencido',
    {
      idproducto: producto, idtipoproducto:tipo, idzona:zona
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getProductoPorOficinas(producto, tipo, ciudad){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxagenciasxdiavsdiamesvencido',
    {
      idproducto: producto, idtipoproducto:tipo, idciudad:ciudad
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getProductoPorPDV(producto, tipo, ciudad, oficina){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxptosventaxdiavsdiamesvencido',
    {
      idproducto: producto, idtipoproducto:tipo, idciudad:ciudad, idoficina:oficina
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  
}
