import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginformComponent } from './loginform/loginform.component';
import {UtilityService} from './UtilityService';
import { FrontComponent } from './front/front.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { NotebookComponent } from './notebook/notebook.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginformComponent,
    FrontComponent,
    RegisterComponent,
    DashboardComponent,
    ControlpanelComponent,
    NotebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule { }
