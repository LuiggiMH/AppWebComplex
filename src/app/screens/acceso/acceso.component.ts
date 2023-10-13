import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent {
  constructor(private ruta: Router) { }

  cerrar() {
    localStorage.setItem('login', "false")
    this.ruta.navigate(['/home'])
  }


}
