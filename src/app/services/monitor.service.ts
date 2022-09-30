import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

  getPdvPorChance(){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'comercial/monitoreoenlineaxchance',
    {
      idproducto: 1
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getPdvPorChancePorEquipo(id){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'comercial/monitoreoenlineaxchancexequipo',
    {
      idsitioventa: id
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

  getEstadoxGirosxRecargas(id){
    let token  = localStorage.getItem('token');
    return this._http.post(this.url+'comercial/estadoxgirosxrecargas',
    {
      idesitioventa: id
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}
