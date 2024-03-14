import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertComponent } from './directives/alert/alert.component';
// import { Subscription } from 'rxjs';
// import { ModalModule } from "ngx-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreationFormComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ModalModule.forRoot(),
    // Ng2SearchPipeModule,
    // Subscription
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
