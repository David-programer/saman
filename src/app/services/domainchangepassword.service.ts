import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
  providedIn: 'root'
})
export class DomainchancepasswordService {
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = global.url;
  }

  setDomainChangePassword(username, oldpassword, newpassword, confirmenewpassword){  
    let token  = localStorage.getItem('token');
    console.log(username);
    console.log(oldpassword);
    console.log(newpassword);
    console.log(confirmenewpassword);
    return this._http.post(this.url+'ldap/cambiarpasswordxusuario',
    {
      username: username, oldpassword: oldpassword, newpassword: newpassword, confirmnewpassword: confirmenewpassword
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }
}

