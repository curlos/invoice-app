import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermsDropdownComponent } from './payment-terms-dropdown.component';

describe('PaymentTermsDropdownComponent', () => {
  let component: PaymentTermsDropdownComponent;
  let fixture: ComponentFixture<PaymentTermsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTermsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTermsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
