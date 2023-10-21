import { Component, Renderer2 } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarOpen = false;
  selectedValue="";
  isMobile = false;
  private mediaSub: Subscription;
  activeStates: boolean[] = [false, false, false, false];
  constructor(private renderer: Renderer2,private router: Router,private mediaObserver: MediaObserver) {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((changes) => {
      this.isMobile = changes.some((change) => change.mqAlias === 'xs');
    });
   }

  ngOnInit(): void {
    this.selectedValue="Dashboard";
    this.navigateToOtherComponent('dashboard',1);
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
  openSidebar() {
    if (!this.sidebarOpen) {
    const element = document.getElementById('sidebar'); // Replace with your element's ID or reference
    this.renderer.addClass(element, 'sidebar-responsive');
      this.sidebarOpen = true;
    }
  }
  
  closeSidebar() {
    if (this.sidebarOpen) {
      const element = document.getElementById('sidebar'); // Replace with your element's ID or reference
      this.renderer.removeClass(element, 'sidebar-responsive');
      this.sidebarOpen = false;
    }
  }

  navigateToOtherComponent(key: string,menuItem: number) {
    this.closeSidebar();
    // Reset active state for all menu items
    this.activeStates = this.activeStates.map(_ => false);
    // Set active state for the clicked menu item
    this.activeStates[menuItem - 1] = true;
    if(key=="Dashboard"){
      this.selectedValue="Dashboard"
      this.router.navigate(['/dashboard']); // Replace 'target-route' with your actual route path
    }else if(key=="libr"){
      this.selectedValue="My Library"
      this.router.navigate(['/my-library']); // Replace 'target-route' with your actual route path
    }else if(key=="status"){
      this.selectedValue="Round Status"
      this.router.navigate(['/round-status']); // Replace 'target-route' with your actual route path
    }else if(key=="assessment"){
      this.selectedValue="Assessment"
      this.router.navigate(['/assessment']); // Replace 'target-route' with your actual route path
    }
  }
}
