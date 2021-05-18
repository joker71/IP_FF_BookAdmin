import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderchartComponent } from './orderchart.component';

describe('OrderchartComponent', () => {
  let component: OrderchartComponent;
  let fixture: ComponentFixture<OrderchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
