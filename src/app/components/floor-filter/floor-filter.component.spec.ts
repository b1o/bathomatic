import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorFilterComponent } from './floor-filter.component';

describe('FloorFilterComponent', () => {
  let component: FloorFilterComponent;
  let fixture: ComponentFixture<FloorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
