import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './core/layout/sidebar/sidebar';
import { DashboardLayout } from './core/layout/dashboard-layout/dashboard-layout';

@Component({
  imports: [RouterOutlet, Sidebar, DashboardLayout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cinecrew-frontend');
}
