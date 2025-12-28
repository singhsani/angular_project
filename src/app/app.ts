import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';

@Component({
  selector: 'app-root',
  imports: [Login,SignUp,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count= 0;
   title= 'Counter App';
   handleCounter(val:string){
    if(val === 'plus'){
      this.count++;
    }else if(val === 'minus' && this.count>0){
      this.count--;
    }else{
      this.count=0;
    }
   }   
   
}
