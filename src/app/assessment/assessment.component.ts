import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  constructor() { }
  selectedTab: 'assessment' | 'my-assessment' = 'assessment';
  ngOnInit(): void {
    this.showMyAssessment()
  }
  showAssessment() {
    this.selectedTab = 'assessment';
  }

  showMyAssessment() {
    this.selectedTab = 'my-assessment';
  }
}
