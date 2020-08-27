import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Room } from '../../models/room';

@Component({
  selector: 'bm-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.less'],
})
export class RoomCardComponent implements OnInit {
  @Input() room: Room;
  @Input() canEdit = false;
  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditClick(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation()
    this.edit.emit(this.room);
  }
}
