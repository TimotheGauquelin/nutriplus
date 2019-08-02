import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnboardingComponent } from './unboarding.component';

describe('UnboardingComponent', () => {
  let component: UnboardingComponent;
  let fixture: ComponentFixture<UnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
