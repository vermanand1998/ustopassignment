import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentOnlyComponent } from './assessment-only.component';

describe('AssessmentOnlyComponent', () => {
  let component: AssessmentOnlyComponent;
  let fixture: ComponentFixture<AssessmentOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentOnlyComponent]
    });
    fixture = TestBed.createComponent(AssessmentOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
