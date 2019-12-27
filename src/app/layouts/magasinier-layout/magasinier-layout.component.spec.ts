import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinierLayoutComponent } from './magasinier-layout.component';

describe('MagasinierLayoutComponent', () => {
  let component: MagasinierLayoutComponent;
  let fixture: ComponentFixture<MagasinierLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasinierLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasinierLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
