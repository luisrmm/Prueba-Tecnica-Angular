import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { ProductsI } from '../../models/products-i';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConectionService {

  urlApi: string = "http://localhost:9000/api/products";

  constructor(private http: HttpClient) { }

  //get all products
  getProducts(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  //create product
  createProduct(products: ProductsI) {
    return this.http.post<ProductsI>(this.urlApi, products)
  }

  //delete product
  deleteProduct(product: ProductsI) {
    return this.http.delete<ProductsI>(this.urlApi + '/' +  product._id)
  }

  //update product
  updateProduct(product: ProductsI) {
    const url = this.urlApi + '/' +  product._id;
    return this.http.put<ProductsI>(url, product)
  }

}
