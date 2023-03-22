import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularColorPickerAppComponent } from './angular-color-picker-app.component';

describe('AngularColorPickerAppComponent', () => {
  let component: AngularColorPickerAppComponent;
  let fixture: ComponentFixture<AngularColorPickerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularColorPickerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularColorPickerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
