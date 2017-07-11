import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// defined variable inside the class can be printed
export class AppComponent {
  title = 'app';
  x: number = 7;
  y: number = 9;
  mystr: string="WOW";
  myBoolean= true;
  myArray = [1,2,3,4,5];
  user ={
  	firstName:'Darth',
  	lastName: 'Vader',
  }
}
