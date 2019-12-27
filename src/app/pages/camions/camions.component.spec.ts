import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionsComponent } from './camions.component';

describe('CamionsComponent', () => {
  let component: CamionsComponent;
  let fixture: ComponentFixture<CamionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
