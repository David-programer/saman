import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from "../global";

@Injectable({
    providedIn: 'root'
})
export class MakePdf{

    public data: any = null;
    public downloadGetFile(){
    }
}