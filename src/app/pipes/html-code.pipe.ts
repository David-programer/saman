import { Pipe, PipeTransform } from '@angular/core';
//  ng generate pipe nombrePipe --skipTests // ng g p nombrePipe--skipTests.
@Pipe({
  name: 'htmlCode'
})
export class HtmlCodePipe implements PipeTransform {
  
  async transform(value: string, ...args: unknown[]){   
    
    return value;

  }

}
