import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreblancheforproductidentificationComponent } from './barreblancheforproductidentification.component';

describe('BarreblancheforproductidentificationComponent', () => {
  let component: BarreblancheforproductidentificationComponent;
  let fixture: ComponentFixture<BarreblancheforproductidentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreblancheforproductidentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreblancheforproductidentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
