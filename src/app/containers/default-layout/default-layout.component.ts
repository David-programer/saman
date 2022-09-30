import {Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { global } from "../../global";
import { UserService } from '../../services/user.service';
import { navBarService } from '../../services/nav.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers:[UserService, navBarService],
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent{
  public sidebarMinimized = false;
  public navItems;//: INavData[];
  
  public url: string;
  public identity;
  public token;
  public temporal;
  public lifeToken;
  public countClick = 0;
  public clickDivGosth = false;
  public msj = '';  

  constructor(
    public _userService: UserService,
    public _navService: navBarService,
    
    public _http: HttpClient,
    private _router: Router
   
  ){
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.loadMenu();
           
  }
  ngOnInit(){      
    this.handlerTokenLive();
    this.intervalToken();    

  }
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  loadMenu() {
    this._navService.getMenu().subscribe((response) => {
      this.navItems = response;
      this.loadPermission(this.navItems);
    });
  }

  loadPermission(paginasPermitidas){
    //En esta función capturamos los nombres de las páginas a las que puede acceder el usuario logueado
    let vistas = [];
    paginasPermitidas.forEach(element => {
      element.children.forEach(elementos => {
        vistas.push(elementos.name)
      });      
    });
    localStorage.setItem('permisos', JSON.stringify(vistas));
  }
  
  intervalToken(){    
    this.lifeToken = setInterval(()=>{
      this.handlerTokenLive();
    }, 30000);
    
  }   

  getToken(): Observable<Object>{
    this.token  = localStorage.getItem('token'); 
    let id;
    id = JSON.parse(localStorage.getItem('identity'));
    id = id.usuario.id;
    return this._http.get(this.url+'validaToken?id='+id+'&token='+this.token, {
      headers: {Authorization: 'Bearer '  + this.token}      
    });
  }

  destroySession(){ 
    clearInterval(this.lifeToken);
    localStorage.removeItem('identity');
    localStorage.removeItem('token'); 
    localStorage.removeItem('permisos'); 
    this.identity = null;
    this.token = null;         
    console.log('Sesión Cerrada.');    
    this._router.navigate(['./login']);
    
  }

  clickGosth(){
    this.countClick++
    if(this.countClick == 5){
      this.clickDivGosth = !this.clickDivGosth;
      this.countClick = 0;                
    }
  }

  private handlerTokenLive(){
    this.getToken().subscribe((response) =>{
      if(response == 1){
        this.temporal = response;
        console.log('Live Token');
      }else{
        this.destroySession();
      }
      
    },(err: any) =>{
      this.destroySession();
    });
  }
  
}
 