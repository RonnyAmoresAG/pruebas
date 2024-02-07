import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallelibroComponent } from './detallelibro.component';

describe('DetallelibroComponent', () => {
  let component: DetallelibroComponent;
  let fixture: ComponentFixture<DetallelibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallelibroComponent]
    });
    fixture = TestBed.createComponent(DetallelibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
