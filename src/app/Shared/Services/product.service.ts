import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  create(product){
    return this.httpClient.post('http://localhost:3001/api/product/', product);
  }
  getAll(){
    return this.httpClient.get('http://localhost:3001/api/Product/');
  }
  get(id){
    return this.httpClient.get('http://localhost:3001/api/Product/'+ id);
  }
  update(id, product){
    return this.httpClient.put('http://localhost:3001/api/Product/' + id, product);
  }
  delete(id){
    return this.httpClient.delete('http://localhost:3001/api/Product/'+ id);
  }
}
