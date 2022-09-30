import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../global";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public url: string;
  constructor(public _http: HttpClient){this.url = global.url;}

  getData(url:string, id?){
    let token  = localStorage.getItem('token');     
    return this._http.post(`${this.url}permisos/${url}`, id != null || id != undefined ? { id } : {},{
      headers: {Authorization: 'Bearer '  + token} 
    });
  }

  getDataxRolId(id:any, url:string){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/${url}`,{id},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
  
  postDataxRolId(role_id, item_id, indexName, url, indexName2?, item_id2?){
    let token  = localStorage.getItem('token'); 
    return this._http.post(`${this.url}permisos/${url}`,{role_id, [indexName]: item_id, [indexName2]: item_id2},{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}