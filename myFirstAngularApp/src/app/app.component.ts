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
  // cannot have two values with attributes
  // user ={
  // 	firstName:'Darth',
  // 	lastName: 'Vader',
  // };

  num: number =1;
  logNum(){
  	console.log('num is:', this.num);
  };

  increaseNum(){
  	this.num++
  	console.log(this.num);
  };

  users=[];
  user= {
  	firstName: '',
  	lastName: ''
  };

  onSubmit(){
  	console.log("onSubmit()");
  	console.log(this.user);

  	this.user = {
  		firstName:'',
  		lastName:''
  	}


  }

}
