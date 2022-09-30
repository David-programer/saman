import { DatePipe } from '@angular/common';

export class MakeChart{
    public datePipe: DatePipe = null;
    
    constructor(
    ){
    }
    
    public test(){
        console.log('hola desde MakeChart');
    }

    public organizarLabel(labelDesordenado){
        let fraseOrdenada = labelDesordenado.charAt(0).toUpperCase() + labelDesordenado.slice(1).toUpperCase();
        fraseOrdenada = fraseOrdenada.replace('_', ' ');
        fraseOrdenada = fraseOrdenada.replace('_', ' ');
        return fraseOrdenada;
    }

    public formatoFecha(fecha){
        let fechaTransformada = this.datePipe.transform(fecha, 'dd MMM YYYY, EEEE').toUpperCase();
        return fechaTransformada;
    }
}