import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  // Literal value
  currentStatus: 'online' | 'offline' | 'unknow' = 'offline';
  private interval?: ReturnType<typeof setInterval>;
  // private destroyRef = inject(DestroyRef);

  constructor(private destroyRef: DestroyRef) { // only version >= 16 for DestroyRef

  }

  ngOnInit(): void {
    console.log('ON-INIT');
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.5) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknow';
      }
    }, 3000);

    this.destroyRef.onDestroy(() => { // setup destroy listener
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    // clearTimeout(this.interval);
  }
}
