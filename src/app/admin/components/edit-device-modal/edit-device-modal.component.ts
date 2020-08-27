import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Device } from '../../models/device';

@Component({
  selector: 'bm-edit-device-modal',
  templateUrl: './edit-device-modal.component.html',
  styleUrls: ['./edit-device-modal.component.less'],
})
export class EditDeviceModalComponent implements OnInit {
  public device: Device;

  public form: FormGroup;

  constructor(private fb: FormBuilder, private modal: NzModalRef) {
    this.form = this.fb.group({
      deviceId: '',
      videoUrl: '',
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.device);
  }

  close() {
    this.modal.close();
  }

  submitForm() {
    console.log(this.form.value);
    this.modal.close(this.form.value);
  }
}
