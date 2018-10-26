import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFunctionComponent } from './date-function.component';

describe('DateFunctionComponent', () => {
  let component: DateFunctionComponent;
  let fixture: ComponentFixture<DateFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
