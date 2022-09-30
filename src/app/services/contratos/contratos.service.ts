import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { global } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  private readonly url : string = global.url;
  constructor(private http:HttpClient) { }

  saveContrato(objeto:any):Observable<any>{
    return this.http.post<any>(this.url+'contrato', objeto);
  }

  verContrato(id:string | null){
    let uri = id ? `${this.url}contrato/${id}` : `${this.url}contrato`
    return this.http.get<any>(uri);
  }

  editar(id:string,formulario:any){
    return this.http.put<any>(this.url+'contrato/'+id,formulario);
  }

  verPersona(id: string){
    return this.http.get<any>(this.url+'persona/'+id);
  }

  verMunicipios(){
    return this.http.get<any>(this.url+'general/getmunicipios');
  }

  verSitiosVenta(){
    return this.http.get<any>(this.url+'general/getpuntosventas');
  }

  consultarForm17(id:any) {
    return this.http.get<any>(this.url+'contrato/form17/'+id)
  }

  verPersonaContrato(id: any) {
    return this.http.get<any>(this.url+'contrato/persona/'+id);
  }

}
