import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
  providedIn: 'root'
})
export class ComportamientoVentasService {
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = global.url;
  }

  getListaProductos(){
    let token  = localStorage.getItem('token');
    return this._http.get(this.url+'general/listaproductos', {
      headers: {Authorization: 'Bearer '  + token}      
    });
  }

  getListaMunicipios(zona, subzona){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'general/listamunicipios',
    {
      idzona: zona, idsubzona: subzona,
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getListaZonas(){
    let token  = localStorage.getItem('token');
    return this._http.get(this.url+'general/listazonas', {
      headers: {Authorization: 'Bearer '  + token}      
    });
  }

  getProductosMesesVsMesAnualVencido(producto, tipo, categoria, transaccional){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxmesvsmesanualvencido',
    {
      idproducto: producto, idtipoproducto: tipo, idcategoria: categoria, transaccional: transaccional
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getProductosMesVsMesAnualVencidoDetalle(producto, tipo, categoria, transaccional, zona){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxmesvsmesanualvencidodetalle',
    {
      idproducto: producto, idtipoproducto: tipo, idcategoria: categoria, transaccional: transaccional, idzona: zona
    },{
      headers: {Authorization: 'Bearer '  + token}
    });

  }

  // ZONA
  productoxmesvsmesanualvencidozona(producto, tipo, categoria, transaccional, zona){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxmesvsmesanualvencidozona',
    {
      idproducto: producto, idtipoproducto: tipo, idcategoria: categoria, transaccional: transaccional, idzona: zona
    },{
      headers: {Authorization: 'Bearer '  + token}
    });

  }

  // SUBZONA
  productoxmesvsmesanualvencidosubzona(producto, tipo, categoria, transaccional, zona, subzona){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxmesvsmesanualvencidosubzona',
    {
      idproducto: producto, idtipoproducto: tipo, idcategoria: categoria, transaccional: transaccional, idzona: zona, idsubzona: subzona
    },{
      headers: {Authorization: 'Bearer '  + token}
    });

  }

  // MUNICIPIO
  productoxmesvsmesanualvencidociudad(producto, tipo, categoria, transaccional, zona, subzona, ciudad){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxmesvsmesanualvencidociudad',
    {
      idproducto: producto, idtipoproducto: tipo, idcategoria: categoria, transaccional: transaccional, idzona: zona, idsubzona: subzona, idciudad: ciudad
    },{
      headers: {Authorization: 'Bearer '  + token}
    });

  }

  // DIA
  productoxdiavsdiavencido(producto, tipo, categoria, transaccional, zona, subzona, ciudad){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'dashboard/productoxdiavsdiavencido',
    {
      idproducto: producto, idtipoproducto: tipo, idcategoria: categoria, transaccional: transaccional, idzona: zona, idsubzona: subzona, idciudad: ciudad
    },{
      headers: {Authorization: 'Bearer '  + token}
    });

  }
}
