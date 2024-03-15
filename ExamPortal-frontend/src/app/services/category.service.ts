import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/category/';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getCategories() {
    return this.http.get(`${baseUrl}`);
  }
  public getCategory(cid: any) {
    return this.http.get(`${baseUrl}${cid}`);
  }
  public addCategory(data: any) {
    console.log(data);
    return this.http.post(`${baseUrl}`, data);
  }
  public deleteCategory(cid: any) {
    return this.http.delete(`${baseUrl}${cid}`);
  }
  public updateCategory(data: any) {
    console.log(data);
    return this.http.put(`${baseUrl}`, data);
  }
}
