import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/products'; // Sua URL do Spring

  constructor(private http: HttpClient) { }

  // Retorna um Observable (Padrão do Angular para fluxos de dados)
  listAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  findById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  update(id: number, product: Product){
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }
}