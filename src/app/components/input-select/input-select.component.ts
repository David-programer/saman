import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  constructor() { }

  @Input() path:string = '';
  @Input() options:any[] = [];
  @Input() keySearch:any[] = [];
  @Input() inputModel:any = '';
  @Input() inputValue:any = null;
  @Input() disabled:boolean = false;
  @Input() absolute:boolean = false;
  @Input() description:boolean = false;
  @Output() clicked_event = new EventEmitter<Object>();

  public inside = false;
  public list:boolean = false;
  public copy_options:any[] = []; 

  public handlerSearch(event){
    this.list = true
    let value = event.target.value.toLowerCase();

    if(this.keySearch.length >= 1){
      for (const key of this.keySearch) {
        this.options = this.copy_options.filter(e =>{
          let search = e[key].toLowerCase();
          return search.includes(value);
        });

        if(this.options.length >= 1) break
      }
    }else{
      this.options = this.copy_options.filter(e =>{
        let search = e[this.path].toLowerCase();
        return search.includes(value);
      });
    }
  }

  public handlerSelect(id){
    let collapse = document.querySelectorAll('.collapse');
    let element = document.getElementById(`collapse-${id}`);

    collapse.forEach(e => {
      e.classList.remove('show-collapse');
    });

    if(element != undefined) element.classList.add('show-collapse');
  }

  @HostListener("click")
  clicked() {this.inside = true;}

  @HostListener("document:click")
  clickedOut() {if(this.inside == false) this.list = false;this.inside = false;}

  ngOnInit(): void {
    this.copy_options = [...this.options]
  }
}
