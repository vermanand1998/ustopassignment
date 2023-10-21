import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-assessment-my',
  templateUrl: './assessment-my.component.html',
  styleUrls: ['./assessment-my.component.scss']
})
export class AssessmentMyComponent {
    constructor(private router: Router,private dataService: DataService) {}
    loading: boolean = true;
    driverSelected="";
    driverSelectedImage="";
    driverSelectedName="";
    driverSelectedDesc=""
    ngOnInit() {
      setTimeout(() => {
        this.loading = false;
        this.driverSelected=this.dataService.getSharedData();
        this.driverSelectedImage=this.dataService.getSharedData().imageUrl
        this.driverSelectedName=this.dataService.getSharedData().driverName
        this.driverSelectedDesc=this.dataService.getSharedData().driverDescription
      }, 5000); // 5000 milliseconds = 5 seconds
    } 
    onButtonClick() {
        this.router.navigate(['/assessment']);
      } 
}
