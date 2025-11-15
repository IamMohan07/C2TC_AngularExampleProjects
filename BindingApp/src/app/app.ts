import { Component , signal } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FormsModule,CommonModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
//interpolation binding variables
    studentName:string='MohanKumar A'
    trainerName:string='Thamizhselvan v';
    batchName:string='C76';
    Location:string='Villupuram';
    //Twoway binding variable
    session:string='Angular';

    //Property binding variables
    onUsernameInput(event: Event):void{
    this.trainerName=(event.target as HTMLInputElement).value;
    }
    //Event binding example
    sayHello():void
    {
     alert('Hello '+this.trainerName+' Welcome to' +this.batchName+' batch');
    }
   }