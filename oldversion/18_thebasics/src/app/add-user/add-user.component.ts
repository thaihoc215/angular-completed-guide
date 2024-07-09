import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


  username = '';

  isUsernameEmpty(): boolean {
    return !this.username;
  }

  onReset() {
    this.username = '';
  }
}
