import { Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
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
    LucideDynamicIcon
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  menuItems = [{label:'Dashboard', icon: LucideLayoutDashboard.icon}, 
    {label:'My Production', icon: LucideClapperboard.icon}, 
    {label:'Talent Directory', icon: LucideUsers.icon}, 
    {label:'AI Casting Assistant', icon: LucideSparkles.icon}, 
    {label:'Bookings', icon: LucideCalendarDays.icon}, 
    {label:'Production Board', icon: LucideClipboardList.icon},];
  
  menuFooterItems = [{label:'Settings', icon: LucideSettings.icon},
    {label:'Notifications', icon: LucideBell.icon},
    {label:'Logout', icon: LucideLogOut.icon}

  ]
}
