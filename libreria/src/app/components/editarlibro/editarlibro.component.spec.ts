import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarlibroComponent } from './editarlibro.component';

describe('EditarlibroComponent', () => {
  let component: EditarlibroComponent;
  let fixture: ComponentFixture<EditarlibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarlibroComponent]
    });
    fixture = TestBed.createComponent(EditarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
