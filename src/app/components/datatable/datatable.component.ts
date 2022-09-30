import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faSearch,faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit{

  @Input() id:string;
  @Input() information:any;
  @Input() options:Array<any>;
  @Input() keys:Array<string>;
  @Input() titles:Array<string>;
  @Input() thAction:string;
  @Input() actions:Array<string>;
  @Output() optionMethod = new EventEmitter<Object>();
  @Output() changeInput = new EventEmitter<Object>();
  public dataSize:number;
  public data:any[];
  public renderData:any[] = [];
  public icons = [faSearch, faTimes];
  public page = 1;
  public pageSize = 10;
  public printData = new BehaviorSubject<any[]>([]);
  public renderSize:any = ()=> this.renderData.length > this.pageSize ? this.pageSize : this.renderData.length;
  public btn1:boolean = false;
  public btn2:boolean = true;
  public btn3:boolean = false;
  public messageColSpan:string;
  public renderDataHasData = ()=>{return this.renderData.length >= 1 ? false : true }
  public actionDelete:boolean = false;
  public changeIcon:boolean = false;
  public changeIconOrderBy:boolean = false;
  public keySelected;

  constructor(settingsPagination: NgbPaginationConfig) {
    settingsPagination.size = 'sm';
  }

  handlerSearch(e){
    this.actionDelete = true;
    const userValue = e.value.toLocaleLowerCase();
    let results = [];
    for (let key in this.data) {
      const filtrar = Object.values(this.data[key]).toString().toLocaleLowerCase();
      if(filtrar.includes(userValue)){
        results.push(this.data[key])
      }
    }

    this.printData.next(results);
    this.dataSize = results.length;
  }

  handlerOrderBy(key){
    this.changeIconOrderBy = !this.changeIconOrderBy;
    
    const htmlCollectionIcon:any = document.getElementsByClassName('datatable-title-component');
    htmlCollectionIcon.forEach(element => {
      element.children[1].classList.remove('active');
    });
    document.getElementById(key).classList.add('active');

    this.keySelected = key;
  
    const validacion = (a,b)=>{
      if(this.changeIconOrderBy == false){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }else{
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
      }
    }

    const dataFilter = this.renderData.sort((a, b) =>{return validacion(a[this.keys[this.titles.indexOf(key)]],b[this.keys[this.titles.indexOf(key)]])});
   
    this.printData.next(dataFilter);
    this.handlerPaintCol(key);
  }

  handlerClickMore(e){
    const number = parseInt(e);
    this.pageSize = number;
    if(number == 5) {this.btn1 = true; this.btn2 = false; this.btn3 = false}
    if(number == 10) {this.btn2 = true; this.btn1 = false; this.btn3 = false}
    if(number == 15) {this.btn3 = true; this.btn2 = false; this.btn1 = false}
  }

  handlerDeleteInput(){
    let input:any = document.getElementById(`inputSearch-${this.id}`);
    input.value = '';
    this.handlerSearch(input);
    this.actionDelete = false;
  }

  handlerPaintCol(key = this.keySelected){
    setTimeout(() => {
      let HTMLCollectionTrH:any =  document.getElementById(`tr-header${this.id}`).children;
    
      const elementsNode = [];
      HTMLCollectionTrH.forEach(element => elementsNode.push(element.id.toString()));

      const positionElement = elementsNode.indexOf(`th-${key}`);

      const HTMLCollectionTrB:any =  document.getElementById(`table-body${this.id}`).children;
      if(positionElement >=0){
        HTMLCollectionTrB.forEach(element => {
          element.children.forEach(element => {
            element.classList.remove('selected')
          });
          element.children[positionElement].classList.add('selected');
      });
      }
    }, 0);
  }

  handlerPrintFor(key:any, datos:any):string{ 
    if(Array.isArray(key)){
      return datos[key[0]].map(i => ` 
      ${i[key[1]]}`)
    }
    return datos[key]
  }

  handlerClickOptions(id:number, datos){
    if(datos['input'] != undefined){
      let input:any = document.getElementById(datos.input.id);
      datos.input.value = input.value
    }
    this.optionMethod.emit({id, datos});
  }

  handlerChangeOptions(id, event){
    event.checked = id.target.checked;
    this.changeInput.emit(event);
  }

  ngOnInit (): void {

    this.printData.subscribe((value:any[])=> {
      this.renderData = value;
    });

    this.information.subscribe(datos=>{
      this.data = datos;
      this.printData.next(this.data);
      this.dataSize = this.data.length;
    });
    let cantidadCol = this.options ? `${this.titles.length + 1}` : `${this.titles.length}`;
    this.messageColSpan = this.actions ? `${cantidadCol + 1}` : cantidadCol;
  }
}