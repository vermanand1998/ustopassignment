import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit {

  loading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 5000); // 5000 milliseconds = 5 seconds
  }

}
