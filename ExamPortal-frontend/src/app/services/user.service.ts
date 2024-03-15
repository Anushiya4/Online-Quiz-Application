import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:8080/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public createUser(user: any) {
    return this.http.post(`${baseUrl}/`,user);
  }
}
