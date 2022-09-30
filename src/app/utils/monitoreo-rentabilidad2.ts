import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class monitoreoRentabilidadUtil2{

    public colores:any = [];
    public copy_data:any =[];    
    public colorDescript:any =[]; 
    public interruptores:any = [];
    public data = new BehaviorSubject<any[]>([]);
    public zonas = new BehaviorSubject<any[]>([]);
    public tipos = new BehaviorSubject<any[]>([]);
    public estados = new BehaviorSubject<any[]>([]);
    public Loading = new BehaviorSubject<boolean>(true);
    public erroResponse = new BehaviorSubject<any>({state: false, message:''});

    public handlerError(e){
        if(e.status == 500){
            this.erroResponse.next({state:true, message: 'Estamos presentando fallas tecnicas en el servidor. Por favor intente más tarde --> 500 server internal error'});
        }else{
            this.erroResponse.next({state:true, message: 'Se presentaron errores no soportados'});
        }
        this.Loading.next(false);
    }

}