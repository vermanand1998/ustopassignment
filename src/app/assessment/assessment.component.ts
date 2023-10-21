import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  constructor(private router: Router,private dataService: DataService) {}
  drivers = [
    {
      driverName: 'Devenand',
      driverDescription: 'Experienced driver with 10+ years of driving history.',
      imageUrl: 'assets/driver1.png'
    },
    {
      driverName: 'Ramesh',
      driverDescription: 'Professional chauffeur specializing in luxury vehicles.',
      imageUrl: 'assets/driver1.png'
    },
    {
      driverName: 'Devenand',
      driverDescription: 'Experienced driver with 10+ years of driving history.',
      imageUrl: 'assets/driver1.png'
    },
    {
      driverName: 'Ramesh',
      driverDescription: 'Professional chauffeur specializing in luxury vehicles.',
      imageUrl: 'assets/driver1.png'
    },
    // Add more driver objects as needed
  ];
  
  loading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  onButtonClick(driver: any) {
    this.dataService.setSharedData(driver);
    this.router.navigate(['/assessment-my']);
  }
}
