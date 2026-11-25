
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  imports: [Sidebar, Header, RouterOutlet],
  selector: 'app-dashboard-layout',
  styleUrl: './dashboard-layout.css',
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
  this.isMobileMenuOpen = false;
}
}
