import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidIdeComponent } from './android-ide.component';

describe('AndroidIdeComponent', () => {
  let component: AndroidIdeComponent;
  let fixture: ComponentFixture<AndroidIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
