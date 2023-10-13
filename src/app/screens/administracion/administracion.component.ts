import { Component } from '@angular/core';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
  constructor(private servicio: NosotrosService) { }

  guardar(id: string, tit: string, aut: string, anio: string, gen: string) {
    const libro = {
      id: id,
      titulo: tit,
      autor: aut,
      anio: anio,
      genero: gen,
    }
    this.servicio.postLibro(libro).subscribe(p => { })
  }

  actualizar(id: string, tit: string, aut: string, anio: string, gen: string) {
    const libro = {
      id: id,
      titulo: tit,
      autor: aut,
      anio: anio,
      genero: gen,
    }
    this.servicio.putLibro(libro, id).subscribe(p => { })
  }

  eliminar(id: string) {
    this.servicio.deleteLibro(id).subscribe();
  }
}
