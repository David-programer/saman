import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../../global";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

    constructor(public _http: HttpClient){this.url = global.url;}

    //----------------------------------------------- VARIABLES PUBLICAS ----------------------------------------//
    public url: string;
    private tipo = new BehaviorSubject<any[]>([]);
    public apns = new BehaviorSubject<any[]>([]);
    private estado = new BehaviorSubject<any[]>([]);
    public servicio = new BehaviorSubject<any[]>([]);
    private proveedor = new BehaviorSubject<any[]>([]); 
    private erroResponse = new BehaviorSubject<{state:boolean, message:string}>({state: false, message:''});
    
    
    //----------------------------------------------- VARIABLES PRIVADAS ----------------------------------------//

    public apns$ = this.apns.asObservable();
    public tipo$ = this.tipo.asObservable();
    public estado$ = this.estado.asObservable();
    public proveedor$ = this.proveedor.asObservable();
    public Loading = new BehaviorSubject<boolean>(true);
    public erroResponse$ = this.erroResponse.asObservable();


    public createData(url:string, settings:any){        
        this.Loading.next(true);
        let token  = localStorage.getItem('token'); 
        return this._http.post(`${this.url}${url}`, {...settings}, {headers: {Authorization: 'Bearer '  + token}})
    }

    public loadData(url:string, file:any){                
        this.Loading.next(true);
        let token  = localStorage.getItem('token'); 
        return this._http.post(`${this.url}${url}`, file, {headers: {Authorization: 'Bearer '  + token}})
    }

    public getData(url:string, path?:string):void{
        this.Loading.next(true);
        let token  = localStorage.getItem('token'); 
        this._http.post(`${this.url}${url}`, {}, {headers: {Authorization: 'Bearer '  + token}})
            .subscribe((response: any) => {
                if(response.successful){
                    this[path].next(response.data);
                    this.Loading.next(false);
                }
            },(e)=>{this.handlerError(e)})
    }

    public dataProvider(url:string, id?:number){
        this.Loading.next(true);
        let token  = localStorage.getItem('token'); 
        return this._http.post(`${this.url}${url}`, id != null || id != undefined ? {id: `${id}`} : {}, {headers: {Authorization: 'Bearer '  + token}})
    }

    public handlerError(e){
        if(e.status == 500){
            this.erroResponse.next({state:true, message: 'Estamos presentando fallas tecnicas en el servidor. Por favor intente más tarde --> 500 server internal error'})
        }else{
            this.erroResponse.next({state:true, message: 'Se presentaron errores no soportados'})
        }
        this.Loading.next(false);
    }
}