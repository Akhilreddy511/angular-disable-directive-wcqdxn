import { Component, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public reenableButton = new EventEmitter<boolean>(false);
  steps = 4;

  constructor(private http: HttpClient) {}

  doStuff() {
    this.http.get('https://jsonplaceholder.typicode.com/userss')
      .subscribe(
        users => console.log(users),
        error => {
          console.log(error);
          setTimeout(()=>{

            this.reenableButton.emit(false);
          },2000)

          
        }
      );
  }
}
