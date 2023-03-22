import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRegisterComponent } from './angular-register.component';

describe('AngularRegisterComponent', () => {
  let component: AngularRegisterComponent;
  let fixture: ComponentFixture<AngularRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
