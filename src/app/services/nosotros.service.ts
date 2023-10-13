import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  private API_LIBROS = 'http://localhost:3000/libros';

  constructor(private http: HttpClient) { }

  //metodo GET - leer
  getLibro(): Observable<any> {
    return this.http.get(this.API_LIBROS);
  }

  //metodo POST
  postLibro(user: any): Observable<any> {
    return this.http.post(this.API_LIBROS, user)
  }

  //metodo PUT
  putLibro(user: any, id: string) {
    this.API_LIBROS = `${this.API_LIBROS}/${id}`
    return this.http.put(this.API_LIBROS, user)
  }

  //metodo ELIMINAR
  deleteLibro(id: string): Observable<any> {
    this.API_LIBROS = `${this.API_LIBROS}/${id}`
    return this.http.delete(this.API_LIBROS)
  }
}