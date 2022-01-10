import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './pages/timer/timer.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [AppComponent, TimerComponent, SettingsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
