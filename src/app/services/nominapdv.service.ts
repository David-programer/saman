import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
  providedIn: 'root'
})
export class NominapdvService {
  public url: string;
  
  constructor(
    public _http: HttpClient
  ){
    this.url = global.url;
  }

  getNominaxPdv(){
    let token  = localStorage.getItem('token');
    return this._http.get(this.url+'general/listapuntosventasnomina', {
      headers: {Authorization: 'Bearer '  + token}      
    });
  }

  setNominaPdv(idePdv, cantPerson, cantHED, cantHEN, cantRN, cantHDD, cantHDN, cantHEDD, cantHEDN){
    let token  = localStorage.getItem('token');
    
    cantPerson == '' ? cantPerson = 0 : cantPerson = cantPerson;
    
    return this._http.post(this.url+'general/guardarnominapvta',
    {
      ide_sitioventa: idePdv, 
      cantPersonas: parseFloat(cantPerson), 
      cantHED: parseFloat(cantHED), 
      cantHEN: parseFloat(cantHEN), 
      cantRN: parseFloat(cantRN), 
      cantHDD: parseFloat(cantHDD), 
      cantHDN: parseFloat(cantHDN), 
      cantHEDD: parseFloat(cantHEDD), 
      cantHEDN: parseFloat(cantHEDN)
    },{
      headers: {Authorization: 'Bearer '  + token}
    });
  }

}