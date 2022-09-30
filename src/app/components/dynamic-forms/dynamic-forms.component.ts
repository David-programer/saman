import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})

export class DynamicFormsComponent implements OnInit {

  constructor() { }

  @Input() sections:any[];
  @Input() btn_sumbit:any = {class: "btn-success", text: "enviar", disabled : false};
  @Output() submit_form = new EventEmitter();
  @Output() check_event = new EventEmitter();
  @Output() blur_event = new EventEmitter();
  @Output() delete_form = new EventEmitter();

  public form_grup = new FormGroup({});
  public inputs_checks = {};

  public valid_inputs(control:string, ms_error:string){
    let input = document.getElementById('input-'+control);
    if(input == null) return;

    let message_error = document.getElementById('message_error'+control);
    if(this.form_grup.controls[control]?.errors != null){ 
      this.form_grup.controls[control]?.errors.hasOwnProperty('pattern') ? (input.classList.add('is-invalid'), input.classList.add('is-invalid'), message_error.innerText = ms_error ) : null;
      this.form_grup.controls[control]?.errors?.required ? (input.classList.add('is-invalid'),message_error.innerText = "¡Este campo es obligatorio!"): null
    }else{ input.classList.remove('is-invalid'); input.classList.add('is-valid')};
  }

  public handler_delete_event(){this.delete_form.emit()}

  public handler_blur_event(input:any){this.blur_event.emit(input)}

  public set_value_checks(control:string, value:any){
    let value_insert = value;
    let checkbox:any = document.getElementById('check-'+control+value);
    checkbox.checked ? null : value_insert = 0;
    this.form_grup.controls[control].setValue(value_insert);
    document.querySelectorAll('.check-'+control).forEach((element) => {element.classList.remove('is-invalid'); element.classList.remove('is-valid'); });
    checkbox.classList.add('is-valid'); this.check_event.emit({control, value});
  }

  public validar_dependencies(dependencies, input = 'none', required:boolean = false){
    if(!dependencies){return false}
    
    let dependencies_return = true;
    dependencies.forEach(element => {
      if(this.form_grup.controls[element.control].value == element.value){ 
        dependencies_return = false; input != 'none' && required ? this.form_grup.controls[input].setValidators(Validators.required) : null;
      }
    });
    
    return dependencies_return;
  }

  public reset_forms(){
    Object.keys(this.form_grup.controls).forEach(element => {
      this.form_grup.controls[element].setValue('');
      const input = document.getElementById(`input-${element}`);
      if(input == null) return;
      input.classList.remove("is-valid");
      input.classList.remove("is-invalid");
    });

    for (const key in this.inputs_checks) {
      document.querySelectorAll(`.check-${key}`).forEach((check:any) => {
        check.classList.remove("is-valid");
        check.classList.remove("is-invalid");
        check.checked = false;
      });
    }
  }

  public send_form(){
    if(this.form_grup.invalid){ 
      Object.keys(this.form_grup.controls).forEach(element => {
        this.valid_inputs(element, "¡Hay errores en el campo!");
        if(this.inputs_checks[element] == true){
          this.form_grup.controls[element]?.errors != null ? document.querySelectorAll('.check-'+element).forEach((item) => {item.classList.add('is-invalid');}) : null
        }
      }); return
    }
    
    if(this.btn_sumbit.disabled == false || this.btn_sumbit.disabled == undefined ) this.submit_form.emit(this.form_grup.value)
  }

  ngOnInit(): void {
    this.sections.forEach((sections, index:number) => {
      if(sections.inputs != undefined && sections.inputs.length >= 1){
        sections.inputs.forEach(element =>{
          element.id_datalist ? setTimeout(() => {document.getElementById(`input-${element.name}`).setAttribute('list', element.id_datalist)}, 0) : null;
          
          if(element.type == "radio" || element.type == "checkbox"){

            this.inputs_checks[element.name] = true;
            let control:any = this.form_grup.controls[element.name], value = '';
            if(element.checked){ value = element.value }
            else{ if(control != null){ value = control.value != '' ? control.value : '';} }
            this.form_grup.setControl(element.name, new FormControl(value));
          
          } else this.form_grup.setControl(element.name, new FormControl(element.value));

          element.required && element.dependencies == undefined && sections.dependencies == undefined ? (this.form_grup.controls[element.name].setValidators(Validators.required), setTimeout(() => {let span = document.getElementById(`requiredIcon${index}`); span ? span.hidden = false : null}, 0)) : null
        });
      }
    });
  }
}