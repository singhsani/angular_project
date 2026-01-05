import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from "./header/header";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message="Welcome to Angular 16 Signal and Effect Demo";
  value = signal(10);
  x=10;
  // constructor(){
  //   effect(()=>{
  //     console.log("value changed:",this.x);
  //   })
  // }
  // update(){
  //   this.x= this.x +10;
  // }
  // display=false;
  // count= 0;
  //  title= 'Counter App';
  //  handleCounter(val:string){
  //   if(val === 'plus'){
  //     this.count++;
  //   }else if(val === 'minus' && this.count>0){
  //     this.count--;
  //   }else{
  //     this.count=0;
  //   }
  //  } 
   
  //  show(){
  //     this.display=true;
  //  }
  //  hide(){
  //   this.display=false
  //  }
  //  toggel(){
  //   this.display= !this.display;
  //  }
   
   taskList:{id:number,task:string}[] = [];
   taskInput: string = '';
   addTask() {
     if (this.taskInput.trim() !== '') {
       this.taskList.push({ id: this.taskList.length + 1, task: this.taskInput });
       console.log(this.taskList)
       this.taskInput = '';

     }
   }
   deleteTask(id:number){
     this.taskList = this.taskList.filter(task => task.id !== id);
   }
}