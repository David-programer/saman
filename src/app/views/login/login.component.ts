import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [UserService]
})
export class LoginComponent {
  public debug = false; //Para pruebas DEBUG
  public user: User;
  public status: string;
  public message;
  public identity;
  public token;
  public pattern;
  public passInput:any = true;
  public passKeyUp:any = false;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.user = new User('', '');
  }

  ngOnInit(){
    //Esta funcion se ejecuta siempre y cierra sesion solo cuando le llega el parametro sure por la url
    this.logout();
  }

  onSubmit(form){

    this._userService.login(this.user, true).subscribe(
      response => {
        if(response.message=="Success"){
          this.status = response.message;
          localStorage.setItem('token', response.token);
          localStorage.setItem('identity', JSON.stringify(response));
          form.reset();
          console.log('Sesión Iniciada Correctamente.');
          this._router.navigate(['home']);
          
        }else{
          this.status ="error";
          console.log(response);
          
        }        
      },
      error => {
        this.status = error;
        this.message = error.error.message;
        console.log('ERROR: '+error.status+' - '+error.statusText);
      }
    );
  }

  logout(){
    this._route.params.subscribe(params =>{
      let logout = +params['sure'];

      if(logout == 1){

        localStorage.removeItem('identity');
        localStorage.removeItem('token'); 

        this.identity = null;
        this.token = null;    
        
        console.log('Sesión Cerrada.');

        this._router.navigate(['./login']);
      }
    });
  }

  get_pattern(){
    this.pattern = this.user.email.includes('@') ? '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' : ''
  }

  public handlerKeyUpPass(){    
    let input:any = document.getElementById('passwordInput');
    input.value!=''?this.passKeyUp=true:this.passKeyUp=false;
  }

  public handlerPassChange(){
    let input:any = document.getElementById('passwordInput');
    this.passInput?input.type='text':input.type='password';    
    return this.passInput = !this.passInput;    
  }

}