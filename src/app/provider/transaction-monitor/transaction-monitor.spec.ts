import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionMonitor } from './transaction-monitor';

describe('TransactionMonitor', () => {
  let component: TransactionMonitor;
  let fixture: ComponentFixture<TransactionMonitor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionMonitor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionMonitor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
