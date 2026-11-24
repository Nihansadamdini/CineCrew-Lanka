import { Component, inject, DestroyRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {LucideClapperboard, LucideSunMoon,LucideBell,} from '@lucide/angular';

@Component({
  imports: [LucideClapperboard, LucideSunMoon, LucideBell],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  pageTitle = "Cast AI";
  pageSubtitle = "LLM-powered casting intelligence";

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  constructor() {

  this.updatePageInfo();

  this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe(() => {
      this.updatePageInfo();
    });

}

updatePageInfo() {
  let activeRoute = this.router.routerState.snapshot.root;

  while (activeRoute.firstChild) {
    activeRoute = activeRoute.firstChild;
  }

  this.pageTitle =
    activeRoute.data['title'] ?? 'CineCrew Lanka';

  this.pageSubtitle =
    activeRoute.data['subtitle'] ?? '';
}
  
}


