import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "header", component: HeaderComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
