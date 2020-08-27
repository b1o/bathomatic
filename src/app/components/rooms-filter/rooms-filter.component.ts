import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bm-rooms-filter',
  templateUrl: './rooms-filter.component.html',
  styleUrls: ['./rooms-filter.component.less']
})
export class RoomsFilterComponent implements OnInit {
  @Input() isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
