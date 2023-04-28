import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Determines the path and its component
const routes: Routes = [
  // Navigate to the dashboard automatically
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

// Initialize the metadata and starts it listening for browser location changes
@NgModule({
  // Configures the routes variable in one step
  imports: [RouterModule.forRoot(routes)],

  // Makes it available to the entire application
  exports: [RouterModule],
})
export class AppRoutingModule {}
