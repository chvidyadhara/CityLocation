import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTheLocationComponent } from './get-the-location.component';

describe('GetTheLocationComponent', () => {
  let component: GetTheLocationComponent;
  let fixture: ComponentFixture<GetTheLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTheLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTheLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
