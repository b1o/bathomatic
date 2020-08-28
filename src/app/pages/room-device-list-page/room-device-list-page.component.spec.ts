import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDeviceListPageComponent } from './room-device-list-page.component';

describe('RoomDeviceListPageComponent', () => {
  let component: RoomDeviceListPageComponent;
  let fixture: ComponentFixture<RoomDeviceListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDeviceListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDeviceListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
