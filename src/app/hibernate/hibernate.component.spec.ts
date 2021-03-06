import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HibernateComponent } from './hibernate.component';

describe('HibernateComponent', () => {
  let component: HibernateComponent;
  let fixture: ComponentFixture<HibernateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HibernateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HibernateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
