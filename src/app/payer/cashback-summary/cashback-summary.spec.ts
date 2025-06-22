import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackSummary } from './cashback-summary';

describe('CashbackSummary', () => {
  let component: CashbackSummary;
  let fixture: ComponentFixture<CashbackSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashbackSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashbackSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
