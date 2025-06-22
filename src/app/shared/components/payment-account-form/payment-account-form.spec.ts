import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAccountForm } from './payment-account-form';

describe('PaymentAccountForm', () => {
  let component: PaymentAccountForm;
  let fixture: ComponentFixture<PaymentAccountForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentAccountForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAccountForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
