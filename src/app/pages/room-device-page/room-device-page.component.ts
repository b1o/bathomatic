import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bm-room-device-page',
  templateUrl: './room-device-page.component.html',
  styleUrls: ['./room-device-page.component.less'],
})
export class RoomDevicePageComponent implements OnInit {
  public deviceId;
  public videoUrl;
  public deviceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.queryParamMap.subscribe((params) => {
      this.deviceId = params.get('deviceId');
      this.deviceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.toDeviceUrl(this.deviceId)
      );
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        params.get('videoUrl')
      );
    });
  }

  private toDeviceUrl(deviceId) {
    return `https://remote.uniqueautomation.co.uk/cgi-bin/bathomatic.cgi/${deviceId}/3018efc8-8be6-4bd6-ba47-e098bd3e3f89`;
  }

  ngOnInit(): void {}
}
