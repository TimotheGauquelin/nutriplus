import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductidentificationComponent } from './productidentification.component';

describe('ProductidentificationComponent', () => {
  let component: ProductidentificationComponent;
  let fixture: ComponentFixture<ProductidentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductidentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductidentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
