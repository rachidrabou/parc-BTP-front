import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEnginComponent } from './ajouter-engin.component';

describe('AjouterEnginComponent', () => {
  let component: AjouterEnginComponent;
  let fixture: ComponentFixture<AjouterEnginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEnginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEnginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
