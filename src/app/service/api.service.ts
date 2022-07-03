import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL : string = "https://api.chucknorris.io/jokes/"
  constructor(private http:HttpClient) { }

  getRandomJoke(){
    let url = this.URL + `random`;
    return this.http.get(url);
  }

  getAllCategories(){
    let url = this.URL + `categories`;
    return this.http.get(url);
  }

  getCategoryJoke(category : any){
    let url = this.URL + `random?category=`+category;
    return this.http.get(url);
  }
}
