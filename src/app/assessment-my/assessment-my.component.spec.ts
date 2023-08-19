import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentMyComponent } from './assessment-my.component';

describe('AssessmentMyComponent', () => {
  let component: AssessmentMyComponent;
  let fixture: ComponentFixture<AssessmentMyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentMyComponent]
    });
    fixture = TestBed.createComponent(AssessmentMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
