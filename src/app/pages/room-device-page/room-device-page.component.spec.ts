import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDevicePageComponent } from './room-device-page.component';

describe('RoomDevicePageComponent', () => {
  let component: RoomDevicePageComponent;
  let fixture: ComponentFixture<RoomDevicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDevicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDevicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
