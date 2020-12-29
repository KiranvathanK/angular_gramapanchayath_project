import { BaseRequestOptions, HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';


import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './backend/fake-backend';
import { AuthService } from './services/auth.service';

import { PropertytaxComponent } from './propertytax/propertytax.component';
import { HttpClientModule } from '@angular/common/http';
import { TapwatertaxComponent } from './tapwatertax/tapwatertax.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UsersService } from './services/users.service';
import { RegisterComponent } from './register/register.component';













@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ReportsComponent,
    PropertytaxComponent,
    TapwatertaxComponent,
    UserdataComponent,
    RegisterComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  

    RouterModule.forRoot([
    { path:'home',
      component: HomeComponent
    },
    {
      path:'propertytax',
      component: PropertytaxComponent
    },
    {
      path:'tapwatertax',
      component: TapwatertaxComponent
    },
    { path:'reports',
      component: ReportsComponent
    },
    { path:'login',
      component: LoginComponent
    },
    { path:'register',
      component:RegisterComponent
    },
]),
    ToastrModule.forRoot({
        timeOut:1200,
        positionClass:'toast-top-center',
        preventDuplicates:true
    }),


  ],
  providers: [
    AuthService, 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    UsersService, 

    
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
