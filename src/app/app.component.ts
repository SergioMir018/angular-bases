import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
