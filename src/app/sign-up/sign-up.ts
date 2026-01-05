import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  users=['anil','ram','shayam','mohan','sohan'];
  students=[
    {name:'anil',age:22},
    {name:'ram',age:23},
    {name:'shayam',age:24},
    {name:'mohan',age:25},
    {name:'sohan',age:26}
  ]
   color=2;
   handleColor(val:number){
     this.color=val;
   }
}
