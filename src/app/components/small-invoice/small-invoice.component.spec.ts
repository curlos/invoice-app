import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInvoiceComponent } from './small-invoice.component';

describe('SmallInvoiceComponent', () => {
  let component: SmallInvoiceComponent;
  let fixture: ComponentFixture<SmallInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
