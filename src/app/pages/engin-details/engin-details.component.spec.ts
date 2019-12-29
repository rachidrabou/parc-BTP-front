import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginDetailsComponent } from './engin-details.component';

describe('EnginDetailsComponent', () => {
  let component: EnginDetailsComponent;
  let fixture: ComponentFixture<EnginDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnginDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
