import { Component, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({ // component decorator
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // disable style scope then angular can understand style beyond this component (global style)
  host: {
    class: 'control', // add class attribute to this component (app-control) wherever app-control used
    '(click)' : 'onClick()'
  }
})
export class ControlComponent {

  // @HostBinding('class') className = 'control'; // backward compatibility reasons
  // @HostListener('click') onClick2() { // recommend using listener define in component decorator
  //   console.log('Clicked2!');
  // }

  @Input({ required: true }) label!: string;

  // accessing host element
  constructor(private elementRef: ElementRef) {

  }


  onClick() {
    console.log('Clicked!');
    console.log(this.elementRef);
  }
}
