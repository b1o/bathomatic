import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CreateRoomModalComponent } from 'src/app/components/create-room-modal/create-room-modal.component';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'bm-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.less'],
})
export class RoomsPageComponent implements OnInit {
  private roomsRef: AngularFireList<Room>;
  public rooms: Observable<Room[]>;

  public canEdit = false;

  constructor(
    private modal: NzModalService,
    private fbDatabase: AngularFireDatabase,
    private fbUser: AngularFireAuth
  ) {
    this.fbUser.user.subscribe((user) => {
      this.canEdit = !!user;
    });

    this.roomsRef = this.fbDatabase.list('room');
    this.rooms = this.roomsRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      tap((c) => console.log(c))
    );
  }

  onRoomEdit(room: Room) {
    const modalRef = this.modal.create({
      nzTitle: `Edit Room ${room.roomNumber}`,
      nzContent: CreateRoomModalComponent,
      nzComponentParams: { roomData: room },
    });
  }

  addRoom() {
    const modalRef = this.modal.create({
      nzTitle: 'Add new room',
      nzContent: CreateRoomModalComponent,
    });
  }

  roomTrackBy(index, el) {
    return el.key;
  }
  ngOnInit(): void {}
}
