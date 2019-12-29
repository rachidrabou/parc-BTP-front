import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAccessoireComponent } from './ajouter-accessoire.component';

describe('AjouterAccessoireComponent', () => {
  let component: AjouterAccessoireComponent;
  let fixture: ComponentFixture<AjouterAccessoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAccessoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
