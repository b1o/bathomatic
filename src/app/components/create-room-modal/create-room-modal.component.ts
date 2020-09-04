import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  Form,
} from '@angular/forms';
import { RoomStatus } from 'src/app/models/room-status.enum';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Room } from 'src/app/models/room';
import { formatCurrency, FormatWidth } from '@angular/common';
import { Device } from 'src/app/admin/models/device';

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
  public devicesRef: AngularFireList<Device>;

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
      bathDevices: this.fb.array([]),
      showerDevices: this.fb.array([]),
      steamDevices: this.fb.array([]),
    });

    if (this.roomData) {
      this.isEdit = true;
      // Could be done better
      if (this.roomData.bathDevices) {
        for (let device of this.roomData.bathDevices) {
          (this.validateForm.get('bathDevices') as FormArray).push(
            this.fb.group(device)
          );
        }
      }

      if (this.roomData?.showerDevices) {
        for (let device of this.roomData.showerDevices) {
          (this.validateForm.get('showerDevices') as FormArray).push(
            this.fb.group(device)
          );
        }
      }
      if (this.roomData?.steamDevices) {
        for (let device of this.roomData.steamDevices) {
          (this.validateForm.get('steamDevices') as FormArray).push(
            this.fb.group(device)
          );
        }
      }
      this.validateForm.patchValue(this.roomData);
    }
  }

  public get hasBath() {
    return this.validateForm.get('bath').value;
  }
  public get hasShower() {
    return this.validateForm.get('shower').value;
  }
  public get hasSteam() {
    return this.validateForm.get('steam').value;
  }

  public get isOccupied() {
    return this.validateForm.get('occupied').value;
  }

  confirmDelete() {
    this.deleteLoading = true;
    this.roomsRef.remove(this.roomData.key).then((_) => {
      this.deleteLoading = false;
      this.modalRef.close();
    });
  }

  toggleLock() {
    this.validateForm.patchValue({
      isLocked: !this.validateForm.get('isLocked').value,
    });
    this.roomsRef.update(this.roomData.key, {
      isLocked: this.validateForm.get('isLocked').value,
    });
  }

  getControlsForDevice(deviceType) {
    return (this.validateForm.get(deviceType) as FormArray).controls;
  }

  addDevice(type) {
    const formArray: FormArray = this.validateForm.get(type) as FormArray;
    formArray.push(
      this.fb.group({
        videoUrl: '',
        deviceName: '',
        deviceId: '',
      })
    );
  }

  removeDeviceControl(type, index) {
    const formArray = this.validateForm.get(type) as FormArray;
    formArray.removeAt(index);
  }

  add() {
    console.log(this.validateForm);
    // this.modalRef.close();
    // this.loading = true;
    // if (this.isEdit) {
    //   this.roomsRef
    //     .update(this.roomData.key, this.validateForm.value)
    //     .then((_) => {
    //       this.loading = false;
    //       this.modalRef.close();
    //     });
    // } else {
    //   this.roomsRef.push(this.validateForm.value).then((res) => {
    //     this.loading = false;
    //     this.modalRef.close();
    //   });
    // }
  }

  cancel() {
    this.modalRef.close();
  }

  submitForm() {}
}
