import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ListaComponent } from './screens/lista/lista.component';
import { AdministracionComponent } from './screens/administracion/administracion.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { E404Component } from './screens/e404/e404.component';
import { HttpClientModule} from '@angular/common/http';
import { TablaComponent } from './components/tabla/tabla.component';
import { LoginComponent } from './screens/login/login.component';
import { AccesoComponent } from './screens/acceso/acceso.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    AdministracionComponent,
    NavBarComponent,
    E404Component,
    TablaComponent,
    LoginComponent,
    AccesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
