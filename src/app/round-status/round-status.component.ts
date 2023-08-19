import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-status',
  templateUrl: './round-status.component.html',
  styleUrls: ['./round-status.component.scss']
})
export class RoundStatusComponent implements OnInit {

  loading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 5000); // 5000 milliseconds = 5 seconds
  }

}
