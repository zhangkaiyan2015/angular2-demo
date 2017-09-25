import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappointComponent } from './myappoint.component';

describe('MyappointComponent', () => {
  let component: MyappointComponent;
  let fixture: ComponentFixture<MyappointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
