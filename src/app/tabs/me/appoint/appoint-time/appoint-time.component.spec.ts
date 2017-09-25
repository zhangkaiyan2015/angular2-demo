import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointTimeComponent } from './appoint-time.component';

describe('AppointTimeComponent', () => {
  let component: AppointTimeComponent;
  let fixture: ComponentFixture<AppointTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
