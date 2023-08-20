import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-assessment-my',
  templateUrl: './assessment-my.component.html',
  styleUrls: ['./assessment-my.component.scss']
})
export class AssessmentMyComponent {
  dummyArray: any[] = [
    {
        id: 1,
        AssessmentName: 'Math Assessment',
        title: 'Job',
        date: '20 Apr 2023',
        time: '00',
        question: '10',
        value: [
            { person: 'SP', color: '#ff0000' },
            { person: 'PK', color: '#3333cc' }
        ]
    },
    {
        id: 2,
        AssessmentName: 'Coding Assessment MCQs',
        title: 'Exam',
        date: '24 Jul 2023',
        time: '02',
        question: '15',
        value: [
            { person: 'LM', color: '#ffcc00' },
            { person: 'HG', color: '#00cc00' },
            { person: 'SO', color: '#990099' },
            { person: 'PM', color: '#ff9900' }
        ]
    },
    {
        id: 3,
        AssessmentName: 'English Assessment Subjective',
        title: 'Interview',
        date: '02 Jan 2023',
        time: '22',
        question: '05',
        value: [
            { person: 'LM', color: '#66cc66' },
            { person: 'HG', color: '#ff66cc' },
            { person: 'SO', color: '#3399ff' },
            { person: 'PM', color: '#ff3366' },
            { person: 'LM', color: '#99ccff' }
        ]
    },
    {
        id: 4,
        AssessmentName: 'Science Assessment',
        title: 'Practice',
        date: '20 Apr 2020',
        time: '23',
        question: '20',
        value: [
            { person: 'II', color: '#66ff66' },
            { person: 'HK', color: '#ff99cc' },
            { person: 'CO', color: '#cc66ff' }
        ]
    },
    {
        id: 5,
        AssessmentName: 'History Assessment',
        title: 'Quiz',
        date: '15 Sep 2023',
        time: '18',
        question: '8',
        value: [
            { person: 'AB', color: '#ff6666' },
            { person: 'XY', color: '#66ffff' }
        ]
    },
    {
        id: 6,
        AssessmentName: 'Physics Assessment',
        title: 'Homework',
        date: '05 Nov 2023',
        time: '14',
        question: '12',
        value: [
            { person: 'CD', color: '#cc99ff' },
            { person: 'EF', color: '#33cc33' },
            { person: 'GH', color: '#ff9933' }
        ]
    },
    {
        id: 7,
        AssessmentName: 'Geography Assessment',
        title: 'Assignment',
        date: '10 Mar 2023',
        time: '10',
        question: '6',
        value: [
            { person: 'IJ', color: '#9966cc' },
            { person: 'KL', color: '#ffcc33' },
            { person: 'MN', color: '#99cc99' }
        ]
    },
    {
        id: 8,
        AssessmentName: 'Chemistry Assessment',
        title: 'Lab',
        date: '18 May 2023',
        time: '16',
        question: '18',
        value: [
            { person: 'OP', color: '#cc6600' },
            { person: 'QR', color: '#6600cc' },
            { person: 'ST', color: '#00cc99' },
            { person: 'UV', color: '#ff3399' }
        ]
    },
    {
        id: 9,
        AssessmentName: 'Art Assessment',
        title: 'Project',
        date: '29 Aug 2023',
        time: '08',
        question: '4',
        value: [
            { person: 'WX', color: '#ff66ff' },
            { person: 'YZ', color: '#66ffcc' }
        ]
    },
    {
        id: 10,
        AssessmentName: 'Music Assessment',
        title: 'Performance',
        date: '07 Jul 2023',
        time: '12',
        question: '3',
        value: [
            { person: 'AA', color: '#996633' },
            { person: 'BB', color: '#663399' },
            { person: 'CC', color: '#339966' }
        ]
    },
    {
        id: 11,
        AssessmentName: 'Physical Education Assessment',
        title: 'Fitness Test',
        date: '14 Apr 2023',
        time: '09',
        question: '10',
        value: [
            { person: 'DD', color: '#cc3366' },
            { person: 'EE', color: '#3399cc' },
            { person: 'FF', color: '#cc9966' },
            { person: 'GG', color: '#66cc99' }
        ]
    },
    {
        id: 12,
        AssessmentName: 'Language Assessment',
        title: 'Presentation',
        date: '23 Jun 2023',
        time: '15',
        question: '7',
        value: [
            { person: 'HH', color: '#ffcc99' },
            { person: 'II', color: '#ccff66' },
            { person: 'JJ', color: '#66ccff' }
        ]
    }
];
loading: boolean = true;
openDialog=false;
isOpen = false;
constructor(private dialog: MatDialog,private modalService: NgbModal) {}
ngOnInit(): void {
  setTimeout(() => {
    this.loading = false;
  }, 5000); // 5000 milliseconds = 5 seconds
  this.openDialog=false;
  this.isOpen=true;
}

  toggleDiv() {
    this.isOpen = !this.isOpen;
  }
  addAssessment(){
    this.openDialog=true;
  }
  close(){
    this.openDialog=false;
  }
  selectedSkillsStatic: string[] = ['UI/UX and Design','No of Questions','Web Development','UI/UX and Design','No of Questions','Web Development'];
  selectedSkills: string[] = [];
  newSkill: string = '';

  addSkill() {
    if (this.newSkill.trim() !== '') {
      this.selectedSkills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(skill: string) {
    const index = this.selectedSkills.indexOf(skill);
    if (index !== -1) {
      this.selectedSkills.splice(index, 1);
    }
  }
}
