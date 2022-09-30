import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { userService } from '../../services/administracion/usuarios/users.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})


export class PerfilComponent implements OnInit {

  constructor(private _userService : userService, private router : Router) { }

  public mesaage:string;
  public mesaageGuide:boolean = false;
  public segundos:number = 8;
  public messagePoper:string = '';
  public user_id = JSON.parse(localStorage.getItem('identity')).usuario.id;
  @ViewChild('alert', {static: false}) alert: NgbAlert;
  

  public actualizarUsuario = new FormGroup({
    email: new FormControl(),
    role_id: new FormControl(),
    id_jefe: new FormControl(),
    id_estado: new FormControl(),
    id_jerarquia: new FormControl(),
    profile_photo_path: new FormControl(''),
    name: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
  });

  handlerEditar(){
    if(this.actualizarUsuario.valid){
      this._userService.postActualizarUsuario(this.user_id, this.actualizarUsuario.value).subscribe((response:any, )=>{
        this.mesaage = response.message;
        if(response.successful){
          this.mesaageGuide = true;
          let restarSegundos = setInterval(()=> {this.segundos--},1000)
          setTimeout(() => {this.alert.close(); this.router.navigate(['/logout/1']); clearInterval(restarSegundos)}, 8000);
        }
      },(error)=>{
        if(error.error.errors.profile_photo_path[0]){
          this.mesaage = error.error.errors.profile_photo_path[0];
          setTimeout(() => {this.alert.close()}, 5000);
        }
      });
    }
  }

  ngOnInit(): void {
    this._userService.getOneUser(this.user_id).subscribe((response:any) =>{      
      if(response.successful){
        this.actualizarUsuario.controls['name'].setValue(response.data[0].name);
        this.actualizarUsuario.controls['email'].setValue(response.data[0].email);
        this.actualizarUsuario.controls['cedula'].setValue(response.data[0].cedula);
        this.actualizarUsuario.controls['id_jefe'].setValue(response.data[0].id_jefe);
        this.actualizarUsuario.controls['role_id'].setValue(response.data[0].id_rol);
        this.actualizarUsuario.controls['id_jerarquia'].setValue(response.data[0].id_jerarquia);
        this.actualizarUsuario.controls['profile_photo_path'].setValue(response.data[0].profile_photo_path);
        this.actualizarUsuario.controls['id_estado'].setValue(response.data[0].id_estado);
      }
    })
  }

}
