import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Determines the path and its component
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

// Initialize the metadata and starts it listening for browser location changes
@NgModule({
  // Configures the routes variable in one step
  imports: [RouterModule.forRoot(routes)],

  // Makes it available to the entire application
  exports: [RouterModule],
})
export class AppRoutingModule {}
