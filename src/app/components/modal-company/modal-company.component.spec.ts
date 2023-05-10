import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompanyComponent } from './modal-company.component';

describe('ModalCompanyComponent', () => {
  let component: ModalCompanyComponent;
  let fixture: ComponentFixture<ModalCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCompanyComponent]
    });
    fixture = TestBed.createComponent(ModalCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
