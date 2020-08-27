import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Device } from '../../models/device';
import { map } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditDeviceModalComponent } from '../../components/edit-device-modal/edit-device-modal.component';

@Component({
  selector: 'bm-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less'],
})
export class AdminPageComponent implements OnInit {
  public form: FormGroup;

  public devicesRef: AngularFireList<Device>;
  public devices: Observable<Device[]>;

  constructor(
    private fbDatabase: AngularFireDatabase,
    private fb: FormBuilder,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.devicesRef = this.fbDatabase.list<Device>('devices');
    this.devices = this.devicesRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

    this.form = this.fb.group({
      deviceId: [null, [Validators.required]],
      videoUrl: [null, [Validators.required]],
    });
  }

  update(device: Device) {
    // this.devicesRef.update(key, changes);
    const modalRef = this.modalService.create({
      nzTitle: 'Edit Device',
      nzContent: EditDeviceModalComponent,
      nzComponentParams: { device },
      nzOnOk: (cmp) => {
        if (cmp.form.valid) {
          this.devicesRef.update(device.key, cmp.form.value);
        }
      },
    });
  }

  afterUpdateModalClose(data) {
    console.log(data);
  }

  remove(key) {
    this.devicesRef.remove(key);
  }

  add(data: Device) {
    this.devicesRef.push(data);
  }

  submitForm() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.add(this.form.value);
  }
}
