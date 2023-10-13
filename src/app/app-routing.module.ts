import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ListaComponent } from './screens/lista/lista.component';
import { AdministracionComponent } from './screens/administracion/administracion.component';
import { E404Component } from './screens/e404/e404.component';
import { LoginComponent } from './screens/login/login.component';
import { AccesoComponent } from './screens/acceso/acceso.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'acceso', component: AccesoComponent},

  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
