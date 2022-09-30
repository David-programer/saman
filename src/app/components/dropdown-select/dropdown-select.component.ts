import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent{

  @Input() data:any;
  @Input() title:string;
  @Input() valueDefault:any;
  @Output() emitClickItem = new EventEmitter<Object>();


  constructor() { }

  handlerClickItem(id,nombre){
    this.emitClickItem.emit({id,nombre});
  }
}
