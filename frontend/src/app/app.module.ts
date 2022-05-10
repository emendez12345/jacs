import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

import{HttpClientModule} from '@angular/common/http';

import { EnvioSMSComponent } from './components/envio-sms/envio-sms.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import Swal from 'sweetalert2';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormloginComponent } from './components/formlogin/formlogin.component';
import { NgifComponent } from './components/ngif/ngif.component';

const appRoutes:Routes =[

 {path:'users',
  component:UsersComponent
 },
 {
   path:'users/ed/:id_usuario',
   component:UsersEditComponent
 },
 {path:'login',
  component:LoginComponent
 },
 {path:'sms',
 component:EnvioSMSComponent
 },
 {path:'formlogin',
 component:FormloginComponent
 },
 {path:'ngif',
 component:NgifComponent
 },

 

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersEditComponent,
    EnvioSMSComponent,
    NavbarComponent,
    LoginComponent,
    FormloginComponent,
    NgifComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  //  AppRoutingModule(approutes),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
