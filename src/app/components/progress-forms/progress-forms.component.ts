import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-progress-forms',
  templateUrl: './progress-forms.component.html',
  styleUrls: ['./progress-forms.component.scss']
})
export class ProgressFormsComponent implements OnInit {

  constructor() { }

  @Input() forms:any[] = [];
  public cant_pages:any[] = []; //[{id: 1, cant_forms: 5, cant_forms_completed: 3}];
  public campos_validados:any = {};
  public icon_check = faCheckCircle;
  @Input() color_check:string = 'text-white'; //text-white;

  public validar_estado(tab_id:number, control:string){
    if(this.forms[tab_id].controls[control]?.errors == null){ 
      if(this.campos_validados[control] == false){
        this.cant_pages = this.cant_pages.map(element => {if(element.id == tab_id) element.cant_forms_completed += 1 ; return element}) 
        this.campos_validados[control] = true;
      }
    }
    else{ 
      if(this.campos_validados[control] || this.campos_validados[control] == undefined){
        this.cant_pages = this.cant_pages.map(element => {if(element.id == tab_id) element.cant_forms_completed -= 1 ; return element}) 
        this.campos_validados[control] = false;
      }
    }
  }

  public handler_delete_event(id_form:number){
    this.cant_pages = this.cant_pages.map((element:any) => {if(element.id == id_form){element.cant_forms_completed = 0} return element});
    for (const element in this.campos_validados) { this.campos_validados[element] = false}
  }

  ngOnInit(): void {
    //Los ids son las posiciones de los formularios
    this.forms.forEach((element:any, index) => {

      let object_new:any = new Object(element);
      object_new.campos_validados = new BehaviorSubject<any[]>([]);
      object_new.cant_pages = new BehaviorSubject<any>(null);;

      object_new.toString = function get_controls() {
        let formulario_keys = [];
        let campos_completed = 0
        setTimeout(() => {
          for (const key in this.controls) {
            if(this.controls[key].status == "INVALID"){ formulario_keys.push(key); let result = this.campos_validados.getValue(); result.push(key); this.campos_validados.next(result)
            }else if(this.controls[key].status == "VALID" && this.controls[key].value && this.controls[key].value != ''){campos_completed += 1, formulario_keys.push(key);}
          };
          this.cant_pages.next({id: index, cant_forms: formulario_keys.length, cant_forms_completed: campos_completed});
        }, 0);
      }
      
      object_new.cant_pages.subscribe(value => value ? this.cant_pages.push(value) : null);
      object_new.campos_validados.subscribe(value => value.forEach(element => {this.campos_validados[element] = false;}));
      
    });   
  }
}