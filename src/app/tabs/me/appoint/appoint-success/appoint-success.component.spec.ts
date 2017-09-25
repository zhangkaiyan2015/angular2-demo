import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointSuccessComponent } from './appoint-success.component';

describe('AppointSuccessComponent', () => {
  let component: AppointSuccessComponent;
  let fixture: ComponentFixture<AppointSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
