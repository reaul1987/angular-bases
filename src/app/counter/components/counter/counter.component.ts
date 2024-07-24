import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        Counter: {{ counter }}
        <br>
        <button (click)="increaseBy()">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="decreaseBy()">-1</button>
        <br>
    `
})

export class CounterComponent implements OnInit {
    public counter: number = 10;

    increaseBy():void {
        this.counter += 1;
      }
    
      decreaseBy():void {
        if(this.counter == 0) return;
        this.counter -= 1;
      }
    
      reset():void{
        this.counter = 10;
      }

    constructor() { }

    ngOnInit() { }
}