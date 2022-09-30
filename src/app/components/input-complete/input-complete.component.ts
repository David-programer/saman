import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-complete',
  templateUrl: './input-complete.component.html',
  styleUrls: ['./input-complete.component.scss']
})

export class InputCompleteComponent implements OnInit {

  @Input() labelText: string;
  @Input() data:any = [];
  @Input() optionElder?:string;
  @Input() selectedata:any[] = [];
  @Output() pushData = new EventEmitter();
  @Output() deleteData = new EventEmitter();
  @Output() deleteAllData = new EventEmitter();

  public datos:any[];
  public valueInput:string = '';
  public icons = [faTimes];
  public renderData:any[]= [];

  constructor() {}

  handlerSelect(e){    
    const filtrados = this.data.filter((i:any) => {
      let im = i.nombre.toLowerCase();
      let ev = e.target.value.toLowerCase();
      return im.includes(ev)
    });
    this.datos = filtrados;
  }

  handlerClick(option:any){
    if(!this.selectedata.find(i => i.nombre === this.optionElder)) {
      if(option.nombre == this.optionElder) {
        this.selectedata = [];
        this.renderData = this.data;  
        this.deleteAllData.emit();
      } 
        this.pushData.emit(option);
        let deleteOption = this.renderData.filter(i => i.id !== option.id);
        this.renderData = deleteOption;
        let input:any = document.getElementById(`input-${this.labelText}`)
        input.focus();
        input.value = '';
    }
  }

  handlerValidar(i,index){
    if(this[index].length >= 1){
      for (const key of this[index]) {
        return i !== key.id ? true : false
      }
    }else{
      return true
    }
  }

  handlerCargaDatos(){
    this.renderData.length >= 1 ? (
      this.datos = this.renderData
    ) : (
      this.datos = this.data.filter(i => this.handlerValidar(i.id, 'selectedata')),
      this.renderData = this.data.filter(i => this.handlerValidar(i.id, 'selectedata'))
    );
  }

  handlerDeleteItem(option:any){
    this.renderData.push(option);
    let deleteOption = this.selectedata.filter(i => i.id !== option.id);
    this.selectedata = deleteOption;
    this.deleteData.emit(option);
  }

  ngOnInit(): void {}

}