import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { TimerComponent } from './pages/timer/timer.component';
import { SettingsModule } from './pages/settings/settings.module';

@NgModule({
  declarations: [AppComponent, TimerComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, SettingsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
