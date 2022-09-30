import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, DatePipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortableModule } from 'ngx-bootstrap/sortable';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { IdentityGuard } from './services/identity.guard';
import { UserService } from './services/user.service';

import { navBarService } from './services/nav.service';
import { LoaderComponent } from './views/loader/loader.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InputCompleteComponent } from './components/input-complete/input-complete.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { ErrorComponent } from './views/error/error';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { ProgressFormsComponent } from './components/progress-forms/progress-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './views/home/home.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

registerLocaleData(localeEs, 'es');

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    SortableModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
    }),
    CarouselModule,
    AccordionModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    InputCompleteComponent,
    DatatableComponent,
    DropdownSelectComponent,
    ErrorComponent,
    InputSelectComponent,
    ProgressFormsComponent,
    DynamicFormsComponent,
    HomeComponent,
  ],
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: '$' },
    {
      provide:LOCALE_ID, useValue: 'es'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    IdentityGuard,
    UserService,
    navBarService,
    DatePipe
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule { 
  constructor(
    library: FaIconLibrary
  ){
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
}