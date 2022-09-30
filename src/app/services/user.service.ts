import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpXhrBackend } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { global } from "../global";

@Injectable()
export class UserService{
    public url: string;
    public identity;
    public token;

    constructor(
        public _http: HttpClient,
        public _xhttp: HttpXhrBackend
    ){
        this.url = global.url;
    }

    login(user, gettoken = null): Observable<any>{
        
        if(gettoken != null){
            user.gettoken ="true";
        }
        return this._http.post(this.url+'loginJson',user,{
            headers: {'Access-Control-Allow-Origin':'*'}      
          });
        //return this._xhttp.handle()
    }

    getIdentity(){

        let identity  = JSON.parse(localStorage.getItem('identity'));

        if(identity && identity != "undefined"){
            this.identity = identity;
        }
        else{
            this.identity = null;
        }

        return this.identity;
    }

    getToken(){

        let token  = JSON.parse(localStorage.getItem('token'));

        if(token && token != "undefined"){
            this.token = token;
        }
        else{
            this.token = null;
        }

        return this.token;
    }
}