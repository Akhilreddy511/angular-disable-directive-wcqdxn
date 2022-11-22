import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appRadialMenu]'
})
export class RadialMenuDirective implements OnChanges {
  @Input('appRadialMenu') step;

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges() {
      console.log('Got steps as: ', this.step);
  }

}