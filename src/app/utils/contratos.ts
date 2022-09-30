import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class contratosUtilidad{
    public data_tercero = new BehaviorSubject<any>(null);
    public ids_contrato = {};
}