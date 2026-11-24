import { Routes } from '@angular/router';
import { DashboardLayout } from './core/layout/dashboard-layout/dashboard-layout';
import { AiCastingPage } from './features/ai-casting/pages/ai-casting-page/ai-casting-page';
import { TalentPage } from './features/talent/pages/talent-page/talent-page';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: 'ai-casting',
        component: AiCastingPage,
        data: {
          title: 'Cast AI',
          subtitle: 'LLM-powered casting intelligence'
        }
      },
      {
        path: 'talent',
        component: TalentPage,
        data: {
          title: 'Talent Directory',
          subtitle: 'Discover and connect with talented individuals'
        }
      },
      {
        path: '',
        redirectTo: 'ai-casting',
        pathMatch: 'full'
      }
    ]
  }
];