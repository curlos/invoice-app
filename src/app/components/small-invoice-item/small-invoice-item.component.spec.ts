import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInvoiceItemComponent } from './small-invoice-item.component';

describe('SmallInvoiceItemComponent', () => {
  let component: SmallInvoiceItemComponent;
  let fixture: ComponentFixture<SmallInvoiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallInvoiceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallInvoiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
