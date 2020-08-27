import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Room } from '../models/room';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private roomsRef: AngularFireList<Room>;
  public rooms: Observable<Room[]>;

  constructor(private fbDatabase: AngularFireDatabase) {
    this.roomsRef = this.fbDatabase.list('rooms');
    this.rooms = this.roomsRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
}
