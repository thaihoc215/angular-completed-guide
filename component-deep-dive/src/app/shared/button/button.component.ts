import { Component } from '@angular/core';

@Component({
  // multiple selector
  selector: 'button[appButton], a[appButton]', // extend build-in button component
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
