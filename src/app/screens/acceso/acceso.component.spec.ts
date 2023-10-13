import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoComponent } from './acceso.component';

describe('AccesoComponent', () => {
  let component: AccesoComponent;
  let fixture: ComponentFixture<AccesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoComponent]
    });
    fixture = TestBed.createComponent(AccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
