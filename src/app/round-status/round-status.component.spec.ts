import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundStatusComponent } from './round-status.component';

describe('RoundStatusComponent', () => {
  let component: RoundStatusComponent;
  let fixture: ComponentFixture<RoundStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
