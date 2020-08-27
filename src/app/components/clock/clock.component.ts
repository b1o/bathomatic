import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'bm-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less'],
})
export class ClockComponent implements OnInit {
  public currentTime = new Date();

  constructor() {}

  ngOnInit(): void {
    interval(1000).subscribe((_) => (this.currentTime = new Date()));
  }
}
