import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { TimerComponent } from './pages/timer/timer.component';

const routes: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/timer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
