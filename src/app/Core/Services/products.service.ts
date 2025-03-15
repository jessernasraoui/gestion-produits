import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../Interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl='https://662e208ca7dda1fa378c2077.mockapi.io/products'

  constructor(private http :HttpClient) {}

  getProducts():Observable<product[]>{

    return this.http.get<product[]>(this.apiUrl);

  }
  createProduct(Product:product):Observable<product>{

    return this.http.post<product>(this.apiUrl,Product);

  }

  deleteProduct(id:number):Observable<any>{

    return this.http.delete<any>(`${this.apiUrl}/${id}`);

  }

}
