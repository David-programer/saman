export class MultiFormats{
    
    public test(){
        console.log('hola desde MultiFormats');
    }
    //Funcion para cambiar el formato de la palabra que se usa como label.
    public organizarLabel(labelDesordenado){
        let fraseOrdenada = labelDesordenado.charAt(0).toUpperCase() + labelDesordenado.slice(1).toUpperCase();
        fraseOrdenada = fraseOrdenada.replace('_', ' ');
        fraseOrdenada = fraseOrdenada.replace('_', ' ');
        return fraseOrdenada;
    }

    //Funcion para cambiar el valor numerico por el de moneda.
    public formatoMoneda(valor){
        var valorTransformado;
        valorTransformado = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(valor);
        return valorTransformado;
    }
}