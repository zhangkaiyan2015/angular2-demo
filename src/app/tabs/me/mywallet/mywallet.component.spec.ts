import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MywalletComponent } from './mywallet.component';

describe('MywalletComponent', () => {
  let component: MywalletComponent;
  let fixture: ComponentFixture<MywalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MywalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MywalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
