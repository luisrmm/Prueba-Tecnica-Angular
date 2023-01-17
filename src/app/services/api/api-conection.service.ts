import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import { ProductsI } from '../../models/products-i';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConectionService {

  urlApi: string = "http://localhost:9000/api/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

}
