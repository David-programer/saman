import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
  providedIn: 'root'
})
export class ConsultarcolillaService {
  public url: string;
  
  constructor(
    public _http: HttpClient
  ){
    this.url = global.url;
  }

  getConsultarColilla(colilla, serie, userId){
    let token  = localStorage.getItem('token');    
    return this._http.post(this.url+'visado/consultaestadocolilla',
    {
      numcolilla: colilla, serie: serie, user_id: userId
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}
