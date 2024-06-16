import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {

  // setup the input from outside
  // @Input({required:true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>(); // still create custom event emit

  

  // getter
  get imagePath() {
    // return 'assets/users/' + this.selectedUser.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// signal input
// export class UserComponent {

//   // setup the input from outside
//   // @Input({required: true}) avatar!: string;
//   // @Input({required: true}) name!: string;
//   avatar = input<string>('');
//   name = input.required<string>();
// select2 = output<string>(); // still create custom event emit

//   imagePath = computed(() => 'assets/users/' + this.avatar())

//   onSelectUser() {
//   }
// }


// export class UserComponent {

//   // add new property will available insid template for use
//   // selectedUser = DUMMY_USERS[randomIndex];

//   //user signal
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

//   // // getter
//   // get imagePath() {
//   //   // return 'assets/users/' + this.selectedUser.avatar;
//   //   return 'assets/users/' + this.selectedUser().avatar
//   // }

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//     this.selectedUser.set(DUMMY_USERS[randomIndex])
//   }
// }


