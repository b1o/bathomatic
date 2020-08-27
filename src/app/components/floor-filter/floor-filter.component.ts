import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'bm-floor-filter',
  templateUrl: './floor-filter.component.html',
  styleUrls: ['./floor-filter.component.less'],
})
export class FloorFilterComponent implements OnInit {

  @Input() isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
