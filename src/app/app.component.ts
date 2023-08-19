import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarOpen = false;
  activeStates: boolean[] = [false, false, false, false];
  constructor(private renderer: Renderer2,private router: Router) { }

  ngOnInit(): void {
    this.navigateToOtherComponent('assessment',2);
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
    // Reset active state for all menu items
    this.activeStates = this.activeStates.map(_ => false);
    // Set active state for the clicked menu item
    this.activeStates[menuItem - 1] = true;
    if(key=="Dashboard"){
      this.router.navigate(['/dashboard']); // Replace 'target-route' with your actual route path
    }else if(key=="libr"){
      this.router.navigate(['/my-library']); // Replace 'target-route' with your actual route path
    }else if(key=="status"){
      this.router.navigate(['/round-status']); // Replace 'target-route' with your actual route path
    }else if(key=="assessment"){
      this.router.navigate(['/assessment']); // Replace 'target-route' with your actual route path
    }
  }
}
