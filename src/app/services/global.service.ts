import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

    constructor(public _http: HttpClient){this.url = global.url;}

    private url: string;
    private erroResponse = new BehaviorSubject<{state:boolean, message:string}>({state: false, message:''});
    public erroResponse$ = this.erroResponse.asObservable();
    public usuario = JSON.parse(localStorage.getItem('identity'));

    public modifyData(url:string, settings:any, resType?:any){        
        let token  = localStorage.getItem('token'); 
        return this._http.post(`${this.url}${url}`, {...settings}, {responseType: resType, headers: {Authorization: 'Bearer '  + token}})
    }

    public get_service_tercero(url:string){
        return this._http.get(`${url}`);
    }

    public sedFormData(url:string, form_data){   
        let token  = localStorage.getItem('token'); 
        return this._http.post(`${this.url}${url}`, form_data, {headers: {Authorization: 'Bearer '  + token}})
    }

    public dataProvider(url:string, id?:any, resType?:any, method?:any){
        let token  = localStorage.getItem('token'); 
        return this._http.post(`${this.url}${url}`, id != null || id != undefined ? {id: `${id}`} : {}, { responseType: resType, headers: {Authorization: 'Bearer '  + token}})
    }

    public getDataProvider(url:string, id?:number, resType?:any, method?:any){
        let token  = localStorage.getItem('token'); 
        if(method == 'GET'){
            return this._http.post(`${this.url}${url}`, { responseType: resType, headers: {Authorization: 'Bearer '  + token} });
        }else{
            return this._http.post(`${this.url}${url}`, id != null || id != undefined ? {id: `${id}`} : {}, { responseType: resType, headers: {Authorization: 'Bearer '  + token} });
        }
        
    }

    public handlerError(e){
        if(e.status == 500){
            this.erroResponse.next({state:true, message: 'Estamos presentando fallas tecnicas en el servidor. Por favor intente más tarde --> 500 server internal error'})
        }else{
            this.erroResponse.next({state:true, message: 'Se presentaron errores no soportados'})
        }
    }
}