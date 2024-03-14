import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreationFormComponent } from './creation-form/creation-form.component';



const routes: Routes = [

  { path: '', redirectTo: 'creation-form', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,data: { title: 'Login' } },
  { path: 'creation-form', component: CreationFormComponent,data: { title: 'Create Form' } },


];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
