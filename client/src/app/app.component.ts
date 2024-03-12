import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private data: any;

  constructor(
    private httpClient:HttpClient
  ){
    this.httpClient.get('http://localhost:3000/data').subscribe((data) => {
      this.data = data;
    });
  }
  
  public getData(){
    return this.data;
  }
}
