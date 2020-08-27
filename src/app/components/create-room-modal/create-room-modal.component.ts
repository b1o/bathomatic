import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RoomStatus } from 'src/app/models/room-status.enum';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'bm-create-room-modal',
  templateUrl: './create-room-modal.component.html',
  styleUrls: ['./create-room-modal.component.less'],
})
export class CreateRoomModalComponent implements OnInit {
  public validateForm: FormGroup;
  public roomData: Room;
  public isEdit = false;
  public loading = false;
  public deleteLoading = false;

  public roomStatusSelect = ['DO_NOT_DISTURB', 'ATTENTION', 'MAINTENANCE'];

  private roomsRef: AngularFireList<Room>;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private fbDatabase: AngularFireDatabase
  ) {
    this.roomsRef = this.fbDatabase.list('room');
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      bath: false,
      shower: false,
      steam: false,
      occupied: false,
      occupiedFor: '',
      roomFloor: '',
      roomNumber: '',
      roomStatus: null,
      tenantName: '',
      isLocked: false,
    });

    if (this.roomData) {
      this.isEdit = true;
      this.validateForm.patchValue(this.roomData);
    }
  }

  public get isOccupied() {
    return this.validateForm.get('occupied').value;
  }

  confirmDelete() {
    this.deleteLoading = true;
    this.roomsRef.remove(this.roomData.key)
      .then(_ => {
        this.deleteLoading = false;
        this.modalRef.close()
      })
  }

  add() {
    console.log(this.validateForm.value);
    // this.modalRef.close();
    this.loading = true;
    if (this.isEdit) {
      this.roomsRef.update(this.roomData.key, this.validateForm.value)
        .then(_ => {
          this.loading = false;
          this.modalRef.close()
        })
    } else {
      this.roomsRef
        .push(this.validateForm.value)
        .then((res) => {
          this.loading = false;
          this.modalRef.close();
        });
    }
  }

  cancel() {
    this.modalRef.close();
  }

  submitForm() {}
}
