import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]', // make selector at attibute
  // selector: '.app-servers', // select by class
  selector: 'app-servers', // select by element
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {


  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = 'Test server name';
  serverCreated = false;
  servers = ['Test server 1', 'Test sever 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log('test');
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

}
