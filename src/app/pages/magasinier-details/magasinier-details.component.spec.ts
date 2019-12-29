import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinierDetailsComponent } from './magasinier-details.component';

describe('MagasinierDetailsComponent', () => {
  let component: MagasinierDetailsComponent;
  let fixture: ComponentFixture<MagasinierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasinierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasinierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
