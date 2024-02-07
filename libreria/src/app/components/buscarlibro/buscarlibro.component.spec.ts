import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarlibroComponent } from './buscarlibro.component';

describe('BuscarlibroComponent', () => {
  let component: BuscarlibroComponent;
  let fixture: ComponentFixture<BuscarlibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarlibroComponent]
    });
    fixture = TestBed.createComponent(BuscarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
