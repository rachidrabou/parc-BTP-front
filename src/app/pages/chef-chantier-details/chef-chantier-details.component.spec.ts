import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefChantierDetailsComponent } from './chef-chantier-details.component';

describe('ChefChantierDetailsComponent', () => {
  let component: ChefChantierDetailsComponent;
  let fixture: ComponentFixture<ChefChantierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefChantierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefChantierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
