import { Component } from '@angular/core';

@Component({
    selector: 'app-selector',
    template: `
    
        <h1> {{ title }} </h1>

        <h2> {{ counter }} </h2>

        <button (click)="restToCOunter()"> -1 </button>
        <samp>Current count tick value {{ countValue }}</samp>
        <button (click)="addToCOunter()"> +1 </button>

    `
})
export class CounterComponent {
  public title: string = 'Auto-Counter App';
  public counter: number = 0;
  public countValue: number = 1;

  private _counter = setInterval(() => {
    this.counter += this.countValue;
  }, 1000);

  addToCOunter() {
    this.countValue += 1;
  }
  
  restToCOunter() {
    this.countValue -= 1;
  }
}