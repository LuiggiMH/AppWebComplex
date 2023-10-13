import { Component } from '@angular/core';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  constructor(private servicio:NosotrosService) {}
  dataNosotros: any;

  ngOnInit() {
    this.servicio.getLibro().subscribe((libro) => {
      this.dataNosotros = libro;
    });
  }
}
