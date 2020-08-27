import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bm-systems-filter',
  templateUrl: './systems-filter.component.html',
  styleUrls: ['./systems-filter.component.less'],
})
export class SystemsFilterComponent implements OnInit {
  @Input() isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
