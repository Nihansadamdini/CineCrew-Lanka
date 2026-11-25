import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideClapperboard,
  LucideLayoutDashboard,
  LucideUsers,
  LucideSparkles,
  LucideCalendarDays,
  LucideClipboardList,
  LucideSettings,
  LucideBell,
  LucideLogOut,
} from '@lucide/angular';

@Component({
  imports: [
    LucideClapperboard,
    LucideLayoutDashboard,
    LucideUsers,
    LucideSparkles,
    LucideCalendarDays,
    LucideClipboardList,
    LucideSettings,
    LucideBell,
    LucideLogOut,
    LucideDynamicIcon,
    RouterLink,
    RouterLinkActive
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  @Input() isMobileMenuOpen = false;
  @Output() closeMenu = new EventEmitter<void>();

  menuItems = [{label:'Dashboard', icon: LucideLayoutDashboard.icon, route: '/dashboard' }, 
    {label:'My Production', icon: LucideClapperboard.icon, route: '/productions'}, 
    {label:'Talent Directory', icon: LucideUsers.icon, route: '/talent'}, 
    {label:'AI Casting Assistant', icon: LucideSparkles.icon, route: '/ai-casting'}, 
    {label:'Bookings', icon: LucideCalendarDays.icon, route: '/bookings'}, 
    {label:'Production Board', icon: LucideClipboardList.icon, route: '/production-board'},];
  
  menuFooterItems = [{label:'Settings', icon: LucideSettings.icon},
    {label:'Notifications', icon: LucideBell.icon},
    {label:'Logout', icon: LucideLogOut.icon}

  ]
}
