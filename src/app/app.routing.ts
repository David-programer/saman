import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { HomeComponent } from './views/home/home.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { IdentityGuard } from './services/identity.guard';
import { PerfilComponent } from './views/perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '404', component: P404Component, data: { title: 'Page 404' } },
  { path: '500', component: P500Component, data: { title: 'Page 500' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } },
  { path: 'logout/:sure', component: LoginComponent, data: { title: 'Logout Page' } },
  { path: 'register', component: RegisterComponent, canActivate: [IdentityGuard], data: { title: 'Register Page' } },
  { path: '', component: DefaultLayoutComponent, canActivate: [IdentityGuard], data: { title: '' }, 
    children: [
      { path: 'home',component: HomeComponent, data: { title: 'Inicio' } },
      { path: 'perfil', component: PerfilComponent, data: { title: 'Perfil' } },
     ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
