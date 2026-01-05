import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    name="";
    display="";
    show=true;
    email="";
    getName(event:Event){
      this.name=(event.target as HTMLInputElement).value
      console.log(name);
      
    }
    showDisplay(){
      this.display=this.name;
    }
    setName(){
      this.name="State"
    }

    getEmail(val:string){
      this.email=val;
      console.log(val);
      
    }
    twoDiv(){
    this.show = !this.show;
   }
}
