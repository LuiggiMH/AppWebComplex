import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NickService {
  private API_NICK = 'http://localhost:3300/users';

  constructor(private http: HttpClient) {}

  getNick(): Observable<any> {
    return this.http.get(this.API_NICK);
  }
}