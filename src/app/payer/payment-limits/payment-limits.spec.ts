import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLimits } from './payment-limits';

describe('PaymentLimits', () => {
  let component: PaymentLimits;
  let fixture: ComponentFixture<PaymentLimits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentLimits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentLimits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
