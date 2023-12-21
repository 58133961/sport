import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchUrl:string="http://localhost:3000/searchByCity"
  constructor(private httpClient : HttpClient) { }


  //request search  by city
  addcity(obj) {
    return this.httpClient.post<{ result: any }>(this.searchUrl, obj);
  }
}
