import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdnumberComponent } from './idnumber.component';

describe('IdnumberComponent', () => {
  let component: IdnumberComponent;
  let fixture: ComponentFixture<IdnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
