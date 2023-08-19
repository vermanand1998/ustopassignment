import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 5000); // 5000 milliseconds = 5 seconds
  }

}
