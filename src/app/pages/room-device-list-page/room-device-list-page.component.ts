import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Device } from 'src/app/admin/models/device';

@Component({
  selector: 'bm-room-device-list-page',
  templateUrl: './room-device-list-page.component.html',
  styleUrls: ['./room-device-list-page.component.less'],
})
export class RoomDeviceListPageComponent implements OnInit {
  public roomId;
  public roomData: Room;

  constructor(
    private route: ActivatedRoute,
    private fbDatabse: AngularFireDatabase,
    private router: Router
) {
    this.route.parent.paramMap.subscribe((params) => {
      this.roomId = params.get('id');
      console.log(params);
      console.log('room id', this.roomId);

      this.fbDatabse
        .list('room/' + this.roomId)
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.reduce(
              (acc, c) => ({ ...acc, [c.key]: c.payload.val() }),
              {}
            )
          )
        )
        .subscribe((data: any) => (this.roomData = data));
    });
  }

  itemClicked(device: Device) {
    console.log(device);
    this.router.navigate(['device'], {
      relativeTo: this.route.parent,
      queryParams: {
        videoUrl: device.videoUrl,
        deviceId: device.deviceId,
      },
    });
  }

  ngOnInit(): void {}
}
