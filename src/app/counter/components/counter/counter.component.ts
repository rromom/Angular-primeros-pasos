import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3> Counter: {{ counter }} </h3>
  <button (click)="this.increaseBy( -1 )" > -1 </button>
  <button (click)="this.resetCounterTo10()" > Reset </button>
  <button (click)="this.increaseBy( 1 )" > +1 </button>

  `,
  standalone: false,
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter +=  value;
  }

  resetCounterTo10():void {
    this.counter = 10;
  }

}
