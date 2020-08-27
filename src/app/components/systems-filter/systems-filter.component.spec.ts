import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsFilterComponent } from './systems-filter.component';

describe('SystemsFilterComponent', () => {
  let component: SystemsFilterComponent;
  let fixture: ComponentFixture<SystemsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
