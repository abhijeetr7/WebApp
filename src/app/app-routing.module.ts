import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreationFormComponent } from './creation-form/creation-form.component';


const routes: Routes = [

  { path: '', redirectTo: 'creation-form', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'creation-form', component: CreationFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
