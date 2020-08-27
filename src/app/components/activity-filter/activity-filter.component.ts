import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bm-activity-filter',
  templateUrl: './activity-filter.component.html',
  styleUrls: ['./activity-filter.component.less']
})
export class ActivityFilterComponent implements OnInit {
  @Input() isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
