import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allCategories: string[] = [];
  joke: string = "Joke";
  selectedCategory: any;

  constructor(private apiService : ApiService) {
    this.getAllCategories();
    this.getRandomJoke();
  }

  ngOnInit(): void {
  }

  getAllCategories() {
    this.apiService.getAllCategories().subscribe((result : any)=>
    {
      this.allCategories = result;
    })
  }

  getRandomJoke() {
    this.apiService.getRandomJoke().subscribe((result : any)=>{
      this.joke = result.value;
    })
  }

  getCategoryJoke(category: any) {
    this.apiService.getCategoryJoke(category).subscribe((result : any)=>{
      this.joke = result.value;
    })
  }

  next() {
    if(this.selectedCategory){
      this.getCategoryJoke(this.selectedCategory);
    }
    else{
      this.getRandomJoke();
    }
  }

}
